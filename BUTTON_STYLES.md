# 网站按钮风格汇总

本文档列出了网站中所有按钮采用的不同风格和样式。

---

## 风格 1：玻璃态按钮 (Glass Morphism)

### 特点
- 半透明渐变背景
- 悬停时背景渐变变为品牌色
- 悬停时轻微放大效果
- 文字颜色平滑过渡

### 使用位置
1. **首页 Hero 区域 - "设备详情"按钮**
   - 位置：`pages/HomePage.tsx` 第 64-77 行
   - 样式：`bg-gradient-to-b from-black/10 via-black/20 to-black/10`
   - 悬停：`hover:from-brand-600/10 hover:via-brand-600/20 hover:to-brand-600/10`
   - 效果：`hover:scale-105` + 多层阴影 + 渐变边框
   - 文字：`text-black/60` → `group-hover:text-brand-600`

2. **产品技术区域 - "设备技术详情"按钮**
   - 位置：`pages/HomePage.tsx` 第 250-257 行
   - 样式：与"设备详情"相同，但**无阴影**
   - 内边距：`px-6 py-2`

---

## 风格 2：旋转光束深色按钮 (Dark Tech Card with Spinning Beam)

### 特点
- 深色渐变背景（stone-800 到 stone-950）
- 悬停时显示旋转光束边框动画
- 白色文字，大写字母，宽字距
- 内阴影效果

### 使用位置
1. **导航栏 - "联系我们"按钮**
   - 位置：`components/Navbar.tsx` 第 78-92 行
   - 光束颜色：白色 `#ffffff`
   - 尺寸：`px-5 py-2`，`text-xs`

2. **双卡片区域 - "查看规格"按钮**
   - 位置：`pages/HomePage.tsx` 第 134-140 行
   - 光束颜色：白色 `#ffffff`
   - 悬停效果：`hover:-translate-y-0.5` + `hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]`
   - 尺寸：`px-6 py-2.5`，`text-xs`

3. **产品技术区域 - "合作开发"按钮**
   - 位置：`pages/HomePage.tsx` 第 260-274 行
   - 光束颜色：深色 `#1c1917`（适配浅色背景）
   - 尺寸：`px-6 py-2`，`text-sm`

4. **联系页面 - "点击查看地图位置"按钮**
   - 位置：`pages/ContactPage.tsx` 第 54-71 行
   - 光束颜色：白色 `#ffffff`
   - 尺寸：`px-8 py-4`，`text-sm`

---

## 风格 3：下划线链接按钮 (Underline Link Style)

### 特点
- 文本样式，无背景
- 悬停时显示下划线动画
- 箭头图标向右移动
- 字体：等宽字体（mono），大写，宽字距

### 使用位置
1. **首页 Hero 区域 - "合作咨询"按钮**
   - 位置：`pages/HomePage.tsx` 第 80-89 行
   - 样式：`text-stone-500 hover:text-stone-900`
   - 下划线：`bg-stone-900`

2. **双卡片区域 - "了解更多"按钮**
   - 位置：`pages/HomePage.tsx` 第 165-171 行
   - 样式：`text-stone-400 hover:text-white`（深色背景）
   - 下划线：`bg-white`

3. **关于我们区域 - "了解我们 Learn More"按钮**
   - 位置：`pages/HomePage.tsx` 第 196-205 行
   - 样式：`text-stone-500 hover:text-stone-900`
   - 下划线：`bg-stone-900`

4. **合作服务区域 - "了解详情"按钮**
   - 位置：`pages/HomePage.tsx` 第 321-327 行
   - 样式：`text-stone-500 hover:text-stone-900`
   - 下划线：`bg-stone-900`

5. **导航栏移动端 - "Get in touch"按钮**
   - 位置：`components/Navbar.tsx` 第 122-131 行
   - 样式：`text-stone-500 hover:text-stone-900`
   - 下划线：`bg-stone-900`

---

## 风格 4：导航链接按钮 (Navigation Link Style)

### 特点
- 文本样式，无背景
- 底部下划线指示器（非动画）
- 激活状态显示完整下划线
- 悬停时下划线从左侧展开

### 使用位置
1. **导航栏 - 导航菜单项**
   - 位置：`components/Navbar.tsx` 第 63-74 行
   - 样式：`text-stone-500 hover:text-stone-900`
   - 下划线：`h-0.5 bg-stone-900`，`scale-x-0` → `scale-x-100`
   - 激活状态：`text-stone-900` + `scale-x-100`

---

## 风格 5：简单文本按钮 (Simple Text Button)

### 特点
- 纯文本，无装饰
- 悬停时文字颜色变化
- 用于次要操作

### 使用位置
1. **Footer - 导航链接**
   - 位置：`components/Footer.tsx` 第 26-29 行
   - 样式：`text-stone-400 hover:text-white`（深色背景）

2. **导航栏 - 移动端菜单按钮**
   - 位置：`components/Navbar.tsx` 第 96-101 行
   - 样式：`text-stone-900`，仅图标

3. **导航栏 - 移动端导航项**
   - 位置：`components/Navbar.tsx` 第 111-119 行
   - 样式：`text-stone-500` / `text-stone-900`（激活）

---

## 风格对比表

| 风格 | 背景 | 文字颜色 | 悬停效果 | 使用场景 |
|------|------|----------|----------|----------|
| 玻璃态 | 半透明渐变 | 黑色/60 | 放大+颜色变化+背景渐变 | 主要CTA按钮 |
| 旋转光束 | 深色渐变 | 白色 | 旋转光束+上移+阴影 | 重要操作按钮 |
| 下划线链接 | 无 | 灰色→黑色 | 下划线展开+箭头移动 | 次要操作/链接 |
| 导航链接 | 无 | 灰色→黑色 | 下划线展开 | 导航菜单 |
| 简单文本 | 无 | 灰色→白色/黑色 | 颜色变化 | Footer/移动端 |

---

## 按钮尺寸规范

| 按钮类型 | 内边距 | 字体大小 | 使用位置 |
|----------|--------|----------|----------|
| 大型主要按钮 | `px-8 py-3` | `text-sm` | Hero区域主要CTA |
| 中型按钮 | `px-6 py-2` | `text-sm` | 产品技术区域 |
| 小型按钮 | `px-5 py-2` | `text-xs` | 导航栏CTA |
| 卡片内按钮 | `px-6 py-2.5` | `text-xs` | 双卡片区域 |
| 链接按钮 | 无固定 | `text-sm` / `text-xs` | 各种次要操作 |

---

## 颜色系统

### 主要颜色
- **Stone 色系**：`stone-50` 到 `stone-950`（中性灰）
- **Brand 色系**：`brand-600` = `#1E2E83`（深蓝色）

### 文字颜色
- 默认：`text-stone-500` / `text-stone-400`
- 悬停：`text-stone-900` / `text-white`（根据背景）
- 激活：`text-stone-900`

### 背景颜色
- 浅色背景：`bg-stone-100` / `bg-white`
- 深色背景：`bg-stone-900` / `bg-stone-950`
- 玻璃态：`from-black/10 via-black/20 to-black/10`

---

## 动画效果

1. **旋转光束**：`animate-[spin_3s_linear_infinite]`
2. **下划线展开**：`w-0` → `w-full`
3. **箭头移动**：`translate-x-0` → `translate-x-1`
4. **按钮上移**：`-translate-y-0.5`
5. **缩放效果**：`scale-105`
6. **透明度变化**：`opacity-0` → `opacity-100`

---

## 总结

网站共使用 **5 种主要按钮风格**：
1. **玻璃态按钮** - 2 个实例（Hero区域、产品技术区域）
2. **旋转光束深色按钮** - 4 个实例（导航栏、双卡片、产品技术、联系页面）
3. **下划线链接按钮** - 5 个实例（多个次要操作）
4. **导航链接按钮** - 4 个实例（导航菜单）
5. **简单文本按钮** - 多个实例（Footer、移动端）

每种风格都有其特定的使用场景和视觉层次，共同构成了网站的统一设计语言。
