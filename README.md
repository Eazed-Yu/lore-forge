# Lore Forge

读取简历文件，自动生成 GitBook 风格的自学文档网站。提取简历中的所有技术知识点，进行章节划分、知识点教学和面试题模拟。

## 功能

- 解析多种简历格式（PDF、DOCX、TXT、MD）
- 自动识别技术知识点并按类别组织章节
- 对每个知识点提供定义、原理、前置知识和实际应用讲解
- 为每个知识点生成面试常见考题及参考答案
- 输出单文件 HTML，采用层级堆叠式工具型 UI 风格

## 目录结构

```
.claude-plugin/
└── marketplace.json
skills/lore-forge/
├── SKILL.md
├── assets/
│   └── template.html
├── references/
│   └── html_guide.md
└── scripts/
    ├── package.json
    └── parse_resume.ts
```

## 安装

作为 Claude Code skill 安装，需要将此仓库注册为 marketplace 源。

## 使用

在 Claude Code 中提供简历文件，skill 会自动：

1. 解析简历内容
2. 提取并分类技术知识点
3. 生成带侧边栏导航的 HTML 文档

## 视觉风格

- 纯色低饱和背景，无渐变无玻璃拟态
- 统一 SVG 图标，无 emoji
- 适度阴影与边框建立层级
- 高信息密度的工具型界面

## 许可证

MIT
