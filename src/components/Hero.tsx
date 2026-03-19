'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/ThemeContext'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const content = {
    zh: {
      greeting: '你好，我是',
      name: 'GAOFEI',
      subtitle: 'AI / CV / 机器人 / 数字孪生 / 工程化',
      description: '专注于 AI 工程落地的全栈工程师',
      cta: '查看项目',
      contact: '联系我',
      wechat: '微信: 1468381314',
      scroll: '向下滚动'
    },
    en: {
      greeting: "Hi, I'm",
      name: 'GAOFEI',
      subtitle: 'AI / CV / Robotics / Digital Twin / Engineering',
      description: 'Full-stack engineer focused on AI engineering implementation',
      cta: 'View Projects',
      contact: 'Contact Me',
      wechat: 'WeChat: 1468381314',
      scroll: 'Scroll down'
    }
  }

  const c = content[language]

  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200/50 dark:border-white/10 backdrop-blur-sm shadow-2xl flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <img
                  src="/gaofei.jpg"
                  alt="Gaofei"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full border-4 border-white dark:border-black" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white-900 dark:text-white mb-4 tracking-tight">
            {c.greeting} <span className="text-emerald-500 dark:text-cyan-700">{c.name}</span>
          </h1>

          <p className="text-xl md:text-2xl text-white-600 dark:text-emerald-400 mb-2">
            {c.subtitle}
          </p>
          <p className="text-lg text-white-500 dark:text-gray-500 mb-10">
            {c.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="group px-8 py-4 bg-emerald-500 hover:bg-emerald-600 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              {c.cta}
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 border border-gray-300 dark:border-white/20 hover:border-gray-400 dark:hover:border-white/40 text-gray-700 dark:text-white rounded-full font-semibold transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/5 backdrop-blur-sm"
            >
              {c.contact}
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://github.com/GaoFei2025-0314"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
            >
              {c.wechat}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-500 dark:bg-gray-500 rounded-full" />
        </div>
      </div>
    </section>
  )
}