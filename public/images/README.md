# 图片资源文件夹

此文件夹用于存放网站的所有图片资源。

## 文件夹结构

- `hero/` - 首页英雄区域的背景图片
- `products/` - 产品页面的产品图片
- `contact/` - 联系页面的图片（如二维码等）

## 使用说明

在 Vite 项目中，`public` 文件夹中的文件可以通过根路径直接访问。

例如：
- 文件位置：`public/images/hero/hero-image.webp`
- 引用方式：`/images/hero/hero-image.webp`

## 图片优化建议

1. **格式**：优先使用 WebP 格式（兼容性最好）
2. **压缩**：确保图片已优化压缩
3. **尺寸**：根据实际显示需求调整图片尺寸
4. **命名**：使用有意义的文件名，如 `hero-mocvd-equipment.webp`
