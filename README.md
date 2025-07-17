# 北京探山科技有限公司网站部署指南

## 项目概述

这是一个为北京探山科技有限公司开发的静态网站，包含首页和关于我们两个页面。网站采用响应式设计，适配手机和电脑等不同屏幕尺寸。

## 项目结构

```
tanshan-CS/
├── index.html          # 首页
├── about.html          # 关于我们页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── script.js       # JavaScript文件
├── images/
│   ├── README.md       # 图片说明文档
│   ├── logo.png        # 公司Logo（需替换）
│   ├── hero-bg.jpg     # 首页背景图（需替换）
│   ├── service-1.jpg   # 服务图片1（需替换）
│   ├── service-2.jpg   # 服务图片2（需替换）
│   ├── service-3.jpg   # 服务图片3（需替换）
│   ├── case-1.jpg      # 案例图片1（需替换）
│   ├── case-2.jpg      # 案例图片2（需替换）
│   ├── case-3.jpg      # 案例图片3（需替换）
│   ├── case-4.jpg      # 案例图片4（需替换）
│   ├── partners-bg.jpg # 合作客户背景图（需替换）
│   ├── cert-1.jpg      # 认证图片1（需替换）
│   ├── cert-2.jpg      # 认证图片2（需替换）
│   └── about-hero-bg.jpg # 关于我们背景图（需替换）
└── README.md           # 本部署指南
```

## 部署方法一：GitHub Pages（推荐）

### 步骤1：注册GitHub账号
1. 访问 [GitHub官网](https://github.com)
2. 点击右上角"Sign up"注册新账号
3. 完成邮箱验证

### 步骤2：创建新仓库
1. 登录GitHub后，点击右上角"+"号，选择"New repository"
2. 仓库名称填写：`tanshan-website`（或您喜欢的名称）
3. 选择"Public"（公开）
4. 不要勾选"Add a README file"
5. 点击"Create repository"

### 步骤3：上传网站文件
1. 在新建的仓库页面，点击"uploading an existing file"
2. 将整个项目文件夹拖拽到上传区域
3. 在下方填写提交信息："Initial commit"
4. 点击"Commit changes"

### 步骤4：启用GitHub Pages
1. 在仓库页面，点击"Settings"标签
2. 左侧菜单找到"Pages"
3. 在"Source"部分，选择"Deploy from a branch"
4. 在"Branch"下拉菜单中选择"main"，文件夹选择"/ (root)"
5. 点击"Save"
6. 等待几分钟，GitHub会显示您的网站地址

### 步骤5：访问网站
- 您的网站地址将是：`https://您的用户名.github.io/tanshan-website`
- 点击该链接即可访问您的网站

## 部署方法二：Vercel（备选）

### 步骤1：注册Vercel账号
1. 访问 [Vercel官网](https://vercel.com)
2. 点击"Sign Up"注册
3. 建议使用GitHub账号登录

### 步骤2：导入项目
1. 登录后点击"New Project"
2. 选择"Import Git Repository"
3. 选择您刚才创建的GitHub仓库
4. 点击"Deploy"

### 步骤3：配置域名（可选）
1. 在项目页面点击"Settings"
2. 找到"Domains"部分
3. 添加您的自定义域名
4. 按照提示配置DNS记录

## 自定义域名设置

### 购买域名
1. 在域名注册商（如阿里云、腾讯云、GoDaddy等）购买域名
2. 例如：`www.tanshan.com.cn`

### 配置DNS
1. 在域名管理后台找到DNS设置
2. 添加CNAME记录：
   - 主机记录：`www`
   - 记录值：`您的用户名.github.io`（GitHub Pages）或Vercel提供的域名
3. 等待DNS生效（通常几分钟到几小时）

## 内容修改指南

### 修改文字内容
1. 用文本编辑器打开对应的HTML文件
2. 找到标记为 `<!-- REPLACE WITH: 具体说明 -->` 的注释
3. 修改注释下方的文字内容
4. 保存文件并重新部署

### 替换图片
1. 准备符合尺寸要求的图片文件
2. 将图片重命名为对应的文件名（如 `logo.png`）
3. 将图片放入 `images` 文件夹
4. 刷新网页查看效果

### 修改联系方式
在 `index.html` 和 `about.html` 中找到以下部分：
```html
<span class="contact-value">(+86) 15011531282</span>
<span class="contact-value">lingfei@tanshan.com.cn</span>
```
修改为您的新联系方式。

## 术语解释

- **仓库（Repository）**：GitHub中存储代码的地方，类似于一个文件夹
- **部署（Deploy）**：将代码发布到网络上，使其可以被访问
- **分支（Branch）**：代码的不同版本，main是主分支
- **提交（Commit）**：保存代码更改的操作
- **DNS**：域名解析系统，将域名转换为IP地址
- **CNAME**：一种DNS记录类型，用于域名重定向

## 常见问题

### Q: 网站显示不正常怎么办？
A: 检查以下几点：
1. 确保所有文件都已上传
2. 检查图片文件是否存在
3. 清除浏览器缓存后重新访问

### Q: 如何更新网站内容？
A: 修改本地文件后，重新上传到GitHub仓库即可自动更新。

### Q: 移动端显示异常？
A: 网站已采用响应式设计，如果仍有问题，请检查：
1. 图片尺寸是否符合要求
2. 浏览器是否为最新版本

### Q: 如何备份网站？
A: 整个项目文件夹就是备份，建议定期下载保存。

## 技术支持

如果在部署过程中遇到问题，可以：
1. 查看GitHub Pages或Vercel的官方文档
2. 检查浏览器控制台是否有错误信息
3. 确保所有文件路径正确

## 维护建议

1. **定期更新**：定期检查并更新网站内容
2. **图片优化**：确保图片文件大小适中，加载速度快
3. **备份**：定期备份整个项目文件夹
4. **测试**：在不同设备和浏览器上测试网站显示效果

---

**注意**：本网站为静态网站，所有内容修改都需要重新上传文件。建议在本地修改测试无误后再上传。 