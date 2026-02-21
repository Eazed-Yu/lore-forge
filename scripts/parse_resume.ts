import { readFileSync } from "fs";
import { extname } from "path";

async function parsePDF(filePath: string): Promise<string> {
  const pdfParse = (await import("pdf-parse")).default;
  const buffer = readFileSync(filePath);
  const data = await pdfParse(buffer);
  return data.text;
}

async function parseDOCX(filePath: string): Promise<string> {
  const mammoth = await import("mammoth");
  const result = await mammoth.extractRawText({ path: filePath });
  return result.value;
}

function parsePlainText(filePath: string): string {
  return readFileSync(filePath, "utf-8");
}

async function main() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error("用法: npx tsx parse_resume.ts <简历文件路径>");
    process.exit(1);
  }

  const ext = extname(filePath).toLowerCase();
  let text: string;

  switch (ext) {
    case ".pdf":
      text = await parsePDF(filePath);
      break;
    case ".docx":
      text = await parseDOCX(filePath);
      break;
    case ".txt":
    case ".md":
      text = parsePlainText(filePath);
      break;
    default:
      console.error(`不支持的文件格式: ${ext}，支持 .pdf .docx .txt .md`);
      process.exit(1);
  }

  console.log(text);
}

main().catch((err) => {
  console.error("解析失败:", err.message);
  process.exit(1);
});
