# 🚀 快速部署指南（5分钟上手）

## 第一步：准备 GitHub 仓库

### 1. 在 GitHub 创建新仓库
- 访问 [github.com](https://github.com)
- 点击右上角 **"+"** → **"New repository"**
- 仓库名：`bj-casi-web`
- 选择 **Public**
- ⚠️ **不要勾选** 任何选项（README、.gitignore、license）
- 点击 **"Create repository"**

### 2. 在本地推送代码

打开 PowerShell，执行以下命令：

```powershell
# 进入项目目录
cd c:\Users\14620\Desktop\bj-casi-web

# 初始化 Git（如果还没有）
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit"

# 连接到 GitHub（替换为你的用户名和仓库名）
git remote add origin https://github.com/你的用户名/bj-casi-web.git

# 推送代码
git branch -M main
git push -u origin main
```

**如果提示需要密码**：
- 用户名：你的 GitHub 用户名
- 密码：使用 **Personal Access Token**（不是密码）

**如何获取 Token**：
1. GitHub → 头像 → Settings → Developer settings
2. Personal access tokens → Tokens (classic) → Generate new token
3. 勾选 `repo` 权限 → Generate
4. 复制 token（只显示一次！）→ 粘贴到密码处

---

## 第二步：在 Vercel 部署

### 1. 登录 Vercel
- 访问 [vercel.com](https://vercel.com)
- 点击 **"Sign Up"** → 选择 **"Continue with GitHub"**

### 2. 导入项目
- 点击 **"Add New..."** → **"Project"**
- 找到你的 `bj-casi-web` 仓库 → 点击 **"Import"**

### 3. 配置（通常自动检测，直接下一步）
- Framework Preset: `Vite` ✅
- Build Command: `npm run build` ✅
- Output Directory: `dist` ✅

### 4. 部署
- 点击 **"Deploy"**
- 等待 1-3 分钟
- ✅ 完成！你会得到一个域名，例如：`bj-casi-web.vercel.app`

---

## 第三步：后续更新

修改代码后，执行：

```powershell
git add .
git commit -m "更新描述"
git push
```

Vercel 会自动重新部署！🎉

---

## ❓ 遇到问题？

查看详细教程：`DEPLOYMENT_GUIDE.md`

常见问题：
- **推送失败**：检查 token 是否正确
- **部署失败**：查看 Vercel 的部署日志
- **网站打不开**：等待几分钟，CDN 需要时间同步

---

**就这么简单！开始部署吧！** 🚀
