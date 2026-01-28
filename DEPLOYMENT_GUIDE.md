# 网站部署教程 - GitHub + Vercel

本教程将一步步教你如何将网站部署到线上。

## 📋 准备工作

1. **GitHub 账号**：如果没有，请访问 [github.com](https://github.com) 注册
2. **Vercel 账号**：如果没有，请访问 [vercel.com](https://vercel.com) 注册（可以用 GitHub 账号直接登录）

---

## 第一步：创建 GitHub 仓库

### 1.1 在 GitHub 上创建新仓库

1. 登录 GitHub，点击右上角的 **"+"** 按钮，选择 **"New repository"**
2. 填写仓库信息：
   - **Repository name**: `bj-casi-web`（或你喜欢的名字）
   - **Description**: `北京中科重仪半导体科技有限公司官网`
   - **Visibility**: 选择 **Public**（公开）或 **Private**（私有）
   - ⚠️ **不要勾选** "Add a README file"、"Add .gitignore"、"Choose a license"
3. 点击 **"Create repository"** 创建仓库

### 1.2 在本地初始化 Git（如果还没有）

打开 PowerShell 或 CMD，进入项目目录：

```powershell
cd c:\Users\14620\Desktop\bj-casi-web
```

检查是否已经是 Git 仓库：

```powershell
git status
```

如果显示 "not a git repository"，执行：

```powershell
git init
```

### 1.3 添加所有文件到 Git

```powershell
git add .
```

### 1.4 提交代码

```powershell
git commit -m "Initial commit: CASI website"
```

### 1.5 连接到 GitHub 仓库

在 GitHub 仓库页面，你会看到类似这样的命令。复制 **"push an existing repository"** 部分的命令：

```powershell
git remote add origin https://github.com/你的用户名/bj-casi-web.git
git branch -M main
git push -u origin main
```

⚠️ **注意**：将 `你的用户名` 替换为你的 GitHub 用户名，将 `bj-casi-web` 替换为你创建的仓库名。

### 1.6 推送代码到 GitHub

执行上面的命令：

```powershell
git remote add origin https://github.com/你的用户名/bj-casi-web.git
git branch -M main
git push -u origin main
```

如果提示输入用户名和密码：
- **Username**: 你的 GitHub 用户名
- **Password**: 你需要使用 **Personal Access Token**（不是密码）

#### 如何创建 Personal Access Token：

1. GitHub → 右上角头像 → **Settings**
2. 左侧菜单 → **Developer settings**
3. **Personal access tokens** → **Tokens (classic)**
4. 点击 **"Generate new token"** → **"Generate new token (classic)"**
5. 填写信息：
   - **Note**: `Vercel Deployment`
   - **Expiration**: 选择过期时间（建议 90 天或 No expiration）
   - **Select scopes**: 勾选 `repo`（全部权限）
6. 点击 **"Generate token"**
7. ⚠️ **重要**：复制生成的 token（只显示一次！）
8. 在推送时，密码处粘贴这个 token

---

## 第二步：在 Vercel 上部署

### 2.1 登录 Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 点击 **"Sign Up"** 或 **"Log In"**
3. 选择 **"Continue with GitHub"**（用 GitHub 账号登录）

### 2.2 导入项目

1. 登录后，点击 **"Add New..."** → **"Project"**
2. 在 **"Import Git Repository"** 中，找到你的 `bj-casi-web` 仓库
3. 点击 **"Import"**

### 2.3 配置项目

Vercel 会自动检测到这是一个 Vite 项目，配置如下：

- **Framework Preset**: `Vite`（应该自动选择）
- **Root Directory**: `./`（保持默认）
- **Build Command**: `npm run build`（保持默认）
- **Output Directory**: `dist`（保持默认）
- **Install Command**: `npm install`（保持默认）

### 2.4 环境变量（本项目不需要）

本项目不需要环境变量，直接跳过。

### 2.5 部署

点击 **"Deploy"** 按钮，等待部署完成（通常 1-3 分钟）。

### 2.6 查看网站

部署完成后，你会看到：
- ✅ **Success!** 提示
- 一个自动生成的域名，例如：`bj-casi-web.vercel.app`
- 点击域名即可访问你的网站！

---

## 第三步：后续更新网站

当你修改了代码，想要更新网站时：

### 3.1 提交更改

```powershell
cd c:\Users\14620\Desktop\bj-casi-web
git add .
git commit -m "更新内容描述"
git push
```

### 3.2 Vercel 自动部署

Vercel 会自动检测到 GitHub 的更新，并在 1-2 分钟内自动重新部署网站。

你可以在 Vercel 控制台的 **"Deployments"** 标签页查看部署状态。

---

## 第四步：自定义域名（可选）

如果你想使用自己的域名（例如 `www.casi.com`）：

### 4.1 在 Vercel 添加域名

1. 进入项目 → **Settings** → **Domains**
2. 输入你的域名，例如：`www.casi.com`
3. 点击 **"Add"**

### 4.2 配置 DNS

Vercel 会显示需要添加的 DNS 记录，在你的域名服务商（如阿里云、腾讯云）添加这些记录即可。

---

## 🎉 完成！

现在你的网站已经成功部署到线上，可以通过 Vercel 提供的域名访问了！

## 📝 常见问题

### Q: 部署失败怎么办？
A: 检查 Vercel 的部署日志，常见原因：
- 构建命令错误
- 依赖安装失败
- 代码有语法错误

### Q: 如何回退到之前的版本？
A: 在 Vercel → Deployments → 找到之前的版本 → 点击 "..." → "Promote to Production"

### Q: 如何查看网站访问统计？
A: Vercel 提供基础的访问统计，在项目页面的 **"Analytics"** 标签页

### Q: 网站加载慢怎么办？
A: 
- Vercel 使用全球 CDN，通常很快
- 可以优化图片大小
- 检查是否有大文件需要优化

---

## 🔗 有用的链接

- [GitHub 官方文档](https://docs.github.com)
- [Vercel 官方文档](https://vercel.com/docs)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)

---

**祝你部署顺利！如有问题，随时提问。** 🚀
