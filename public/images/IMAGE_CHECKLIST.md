# 图片文件清单

请将以下图片文件放入对应的文件夹中。建议使用 WebP 格式以优化加载速度。

## 需要准备的图片文件

### 首页图片 (`/images/hero/`)

1. **hero-mocvd-equipment.webp**
   - 用途：首页英雄区域背景图
   - 原始链接：`https://pic.82314912.xyz/api/cfile/AgACAgEAAyEGAATEcCnBAAIFbGl4bC1E4PmFYWu1fCQHvXw_ilt5AAJYC2sbyYbJRyjTJ-4wRyZtAQADAgADeQADOAQ`
   - 建议尺寸：1920x1080px
   - 位置：`public/images/hero/hero-mocvd-equipment.webp`

2. **equipment-background.webp** (可选)
   - 用途：产品技术区域背景图
   - 原始链接：`https://images.unsplash.com/photo-1581093458791-9f3c3900df4b`
   - 建议尺寸：根据实际需求
   - 位置：`public/images/hero/equipment-background.webp`

### 产品页面图片 (`/images/products/`)

1. **zy316-mocvd-machine.webp**
   - 用途：产品页面主图（ZY316 MOCVD 设备）
   - 原始链接：`https://pic.82314912.xyz/api/cfile/AgACAgEAAyEGAATEcCnBAAIFbWl4bN1Ua9TYS9nIGZ0--s1s46-gAAJZC2sbyYbJR5-595Z8k5AQAQADAgADdwADOAQ`
   - 建议尺寸：800x600px
   - 位置：`public/images/products/zy316-mocvd-machine.webp`

2. **performance-background.webp**
   - 用途：性能验证区域背景图
   - 原始链接：`https://pic.82314912.xyz/api/cfile/AgACAgEAAyEGAATEcCnBAAIFbml4ci57CPuQklXF4uWm8LrVRM7tAAJbC2sbyYbJR1yBux6E8D2CAQADAgADdwADOAQ`
   - 建议尺寸：1920x1080px
   - 位置：`public/images/products/performance-background.webp`

### 联系页面图片 (`/images/contact/`)

1. **wechat-qrcode.webp**
   - 用途：微信公众号二维码
   - 原始链接：`https://pic.82314912.xyz/api/cfile/AgACAgEAAyEGAATEcCnBAAIFb2l4daQRI_t7cEpygMPauNLR-d0nAAJcC2sbyYbJR51RPlvk7AeSAQADAgADbQADOAQ`
   - 建议尺寸：根据二维码实际尺寸
   - 位置：`public/images/contact/wechat-qrcode.webp`

## 图片优化建议

1. **格式转换**：将原始图片转换为 WebP 格式
   - 可以使用在线工具：https://squoosh.app/
   - 或使用命令行工具：`cwebp input.jpg -q 80 -o output.webp`

2. **压缩优化**：
   - 质量设置：80-85（平衡质量和文件大小）
   - 确保图片清晰度满足显示需求

3. **尺寸调整**：
   - 根据实际显示尺寸调整图片大小
   - 避免使用过大的图片文件

## 验证步骤

1. 将所有图片文件放入对应文件夹
2. 运行 `npm run dev` 启动开发服务器
3. 检查各个页面图片是否正常显示
4. 检查浏览器控制台是否有图片加载错误

## 注意事项

- 所有图片路径已更新为本地路径
- 如果图片文件不存在，浏览器会显示图片加载错误
- 建议在提交代码前确保所有图片文件都已准备好
