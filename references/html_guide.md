# HTML 生成视觉规范

## 色彩体系

### 基础色
- 背景色: `#FAFAFA`（主背景）、`#FFFFFF`（内容区）、`#F5F5F5`（侧边栏）
- 文字色: `#1A1A1A`（标题）、`#333333`（正文）、`#666666`（辅助文字）
- 边框色: `#E5E5E5`（分隔线）、`#D9D9D9`（卡片边框）

### 强调色
- 主强调色: `#2B6CB0`（链接、当前导航项）
- 次强调色: `#E53E3E`（重要标记）
- 代码背景: `#F7F7F7`
- 代码边框: `#EBEBEB`

## 排版规范

### 字体
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", sans-serif;
```
代码字体：
```css
font-family: "JetBrains Mono", "Fira Code", "Source Code Pro", monospace;
```

### 字号层级
- 页面标题: 28px, font-weight: 700
- 章节标题: 22px, font-weight: 600
- 小节标题: 18px, font-weight: 600
- 正文: 15px, font-weight: 400, line-height: 1.75
- 辅助文字: 13px, font-weight: 400

## 布局结构

### 整体布局
```
+------------------+----------------------------------------+
|                  |                                        |
|   侧边栏导航     |          主内容区域                      |
|   (260px 固定)   |          (自适应宽度, max-width: 860px)  |
|                  |                                        |
+------------------+----------------------------------------+
```

### 侧边栏
- 固定宽度 260px，左侧固定定位
- 背景色 `#F5F5F5`，右边框 `1px solid #E5E5E5`
- 章节标题加粗，知识点条目缩进
- 当前选中项左侧 3px 实色边框 + 背景高亮

### 主内容区
- 左侧 padding 与侧边栏宽度对齐
- 内容最大宽度 860px，水平居中
- 上下 padding: 40px，左右 padding: 48px

## 组件规范

### 知识点卡片
```css
.knowledge-section {
  margin-bottom: 32px;
  padding: 24px 28px;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  background: #FFFFFF;
}
```

### 面试题区块
```css
.interview-block {
  margin: 16px 0;
  padding: 16px 20px;
  border-left: 3px solid #2B6CB0;
  background: #FAFAFA;
}
```

### 前置知识提示
```css
.prerequisite {
  margin: 12px 0;
  padding: 12px 16px;
  border: 1px solid #D9D9D9;
  border-radius: 4px;
  background: #F7F7F7;
  font-size: 14px;
}
```

## SVG 图标规范

使用统一的 stroke 风格 SVG 图标：
- 尺寸: 16x16 或 20x20
- stroke-width: 1.5
- stroke: currentColor
- fill: none

常用图标：
- 章节折叠/展开箭头
- 搜索图标
- 面试题标记图标
- 前置知识链接图标
