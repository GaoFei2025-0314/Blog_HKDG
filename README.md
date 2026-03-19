# 个人主页 (Personal Portfolio)

基于 React + Next.js + TypeScript + Tailwind CSS 构建的现代化个人作品集网站。

## 功能特性

- 🌙 **暗色/浅色主题切换** - 支持明暗两种主题模式
- 🌐 **双语支持** - 中文/英文无缝切换
- ✨ **毛玻璃风格设计** - 现代简约的视觉效果
- 💻 **代码雨动态背景** - 黑客帝国风格动画（暗色模式速度更快）
- 📱 **响应式设计** - 完美适配各种屏幕尺寸

## 技术栈

- **框架**: Next.js 16 + React 19
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **字体**: Geist Font

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 生产构建

```bash
npm run build
npm start
```

## 项目结构

```
├── public/
│   ├── gaofei.jpg          # 头像图片
│   └── avatar.jpg          # 备用头像
├── src/
│   ├── app/
│   │   ├── globals.css      # 全局样式
│   │   ├── layout.tsx      # 根布局
│   │   └── page.tsx        # 首页
│   ├── components/
│   │   ├── Hero.tsx        # 首屏区域
│   │   ├── Projects.tsx    # 项目展示
│   │   ├── Skills.tsx      # 技能展示
│   │   ├── Contact.tsx     # 联系方式
│   │   ├── Footer.tsx     # 页脚
│   │   ├── Navbar.tsx     # 导航栏
│   │   └── MatrixBackground.tsx  # 代码雨背景
│   └── contexts/
│       └── ThemeContext.tsx  # 主题和语言上下文
└── package.json
```

## 定制修改

### 修改头像

将图片放入 `public/` 目录，并在 `Hero.tsx` 中修改图片路径。

### 修改主题颜色

在各个组件中找到 `text-cyan-500` 或 `bg-cyan-500`，可替换为其他颜色：
- 橙色: `orange-500`
- 紫色: `purple-500`
- 绿色: `emerald-500`

### 修改背景速度

在 `MatrixBackground.tsx` 中调整 `speedFactorRef.current` 的值。

## 许可证

MIT License