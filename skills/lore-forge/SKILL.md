---
name: lore-forge
description: 读取简历文件（支持 PDF、DOCX、TXT、MD 格式）并生成详细的 GitBook 风格自学文档网站。自动提取简历中的所有技术知识点，进行合理章节划分，对每个知识点及其前置知识进行教学讲解，并提供面试常见考题模拟。使用 HTML 构建，采用层级堆叠式工具型 UI 风格。当用户提供简历文件并要求生成学习文档、知识点讲解、面试准备材料时触发此 skill。
---

# Lore Forge

将简历转化为教科书级别的自学文档网站。

> **任务规模提示**：这是一个大型工程。一份典型简历会产生 6-8 个章节、每章 3-5 个 section，合计约 20-40 个内容文件，每个文件 800 字以上。**总输出量通常超过 3 万字。** 不要试图一次性完成，严格按阶段推进，每个文件写完再写下一个。

---

## 文件组织

HTML 与内容**分离**存放：

```
output/
├── index.html                  # 网站首页（纯结构，无教程内容）
├── chapters/
│   ├── ch01_java.html          # 章节页面（纯结构，通过 JS 加载内容）
│   └── ch02_database.html
└── content/
    ├── ch01_java/
    │   ├── s01_jvm.md          # 每个 section 的教程正文（Markdown）
    │   └── s02_collections.md
    └── ch02_database/
        └── s01_mysql.md
```

HTML 文件只负责布局和导航，内容文件（`.md`）存放实际教程文字。页面通过 `fetch` 加载对应 `.md` 文件并渲染（使用 [marked.js](https://cdn.jsdelivr.net/npm/marked/marked.min.js) CDN）。

---

## 工作流

### 阶段一：解析简历

- **PDF / DOCX**：在 `skills/lore-forge/scripts/` 目录下执行：
  ```bash
  npm install 2>/dev/null && npx tsx parse_resume.ts <file_path>
  ```
- **TXT / MD**：直接读取。

### 阶段二：制定大纲

**在写任何文件之前**，先输出完整大纲。简历是入口，不是边界——识别出技术方向后，扩展为该方向的完整知识体系。

大纲格式：

```
# 大纲

## ch01 Java 语言基础
- s01 JVM 内存模型
  - 前置：操作系统内存管理
  - 覆盖：堆栈方法区、GC 算法、G1/ZGC、调优参数
  - 面试题：3 道
- s02 集合框架
  - 前置：数据结构基础
  - 覆盖：HashMap 原理、ConcurrentHashMap、List/Set 对比
  - 面试题：3 道

## ch02 数据库
...
```

大纲确认后，进入阶段三。

### 阶段三：逐文件生成

按以下顺序，**每次只生成一个文件**，生成完毕再继续下一个：

1. `index.html` — 首页，含章节目录卡片
2. 所有 `chapters/ch*.html` — 章节页面骨架
3. 所有 `content/**/*.md` — 每个 section 的教程正文

#### content/*.md 的写法

每个 `.md` 文件对应一个 section，必须是**完整教程**，不是目录或摘要。结构：

```markdown
## 前置知识

### {前置概念1}
[完整讲解，至少 3 段]

### {前置概念2}
...

## 核心原理

### {topic1}
**是什么**：...
**为什么**：...
**怎么工作**：...（可含代码示例）

### {topic2}
...

## 面试题

### Q: {题目}
**答**：[详尽解答，突出底层逻辑]
**追问**：...
```

**篇幅**：每个 section 文件不少于 800 字。宁多勿少，每个知识点讲透再讲下一个。

---

## UI 规范

参考 `assets/template.html`。核心原则：

- 工具型 UI，VitePress 风格，高信息密度
- 固定侧边栏（260px）+ 主内容区（max-width: 860px）
- 主强调色 `#2B6CB0`
- **禁止**：渐变/玻璃拟态、emoji 图标、装饰性图表
