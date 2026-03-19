export const translations = {
  zh: {
    nav: {
      home: '首页',
      projects: '项目',
      skills: '技能',
      contact: '联系我'
    },
    hero: {
      greeting: '你好，我是',
      name: '高飞',
      title: '全栈开发工程师',
      description: '专注于构建优雅、高效的 Web 应用',
      cta: '查看项目'
    },
    projects: {
      title: '精选项目',
      subtitle: '代表作品展示',
      viewDetails: '查看详情',
      tags: {
        nextjs: 'Next.js',
        typescript: 'TypeScript',
        tailwind: 'Tailwind',
        react: 'React',
        nodejs: 'Node.js',
        mongodb: 'MongoDB',
        vue: 'Vue.js',
        socketio: 'Socket.io',
        redis: 'Redis'
      }
    },
    skills: {
      title: '技能栈',
      subtitle: '技术擅长',
      frontend: '前端开发',
      backend: '后端开发',
      tools: '工具链'
    },
    contact: {
      title: '联系我',
      subtitle: '期待与您交流',
      email: '邮箱',
      wechat: '微信'
    },
    footer: {
      copyright: '© 2024 高飞. All rights reserved.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, I am',
      name: 'Gaofei',
      title: 'Full Stack Developer',
      description: 'Building elegant and efficient web applications',
      cta: 'View Projects'
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Showcase of my work',
      viewDetails: 'View Details',
      tags: {
        nextjs: 'Next.js',
        typescript: 'TypeScript',
        tailwind: 'Tailwind',
        react: 'React',
        nodejs: 'Node.js',
        mongodb: 'MongoDB',
        vue: 'Vue.js',
        socketio: 'Socket.io',
        redis: 'Redis'
      }
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technical Expertise',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools'
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's connect",
      email: 'Email',
      wechat: 'WeChat'
    },
    footer: {
      copyright: '© 2024 Gaofei. All rights reserved.'
    }
  }
}

export type Language = keyof typeof translations
export type TranslationKeys = typeof translations.zh