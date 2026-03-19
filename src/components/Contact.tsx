'use client'

import { useLanguage } from '@/contexts/ThemeContext'

export default function Contact() {
  const { language } = useLanguage()
  const isZh = language === 'zh'

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/[0.06] rounded-full blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {isZh ? '联系我' : 'Get In '}<span className="text-cyan-500 dark:text-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-white/60 text-lg max-w-xl mx-auto">
            {isZh ? '有项目合作或技术咨询需求？欢迎联系我！' : 'Have a project or technical inquiry? Feel free to reach out!'}
          </p>
        </div>

        <div className="bg-white/60 dark:bg-white/[0.03] dark:backdrop-blur-xl backdrop-blur-md border border-gray-200/50 dark:border-white/[0.08] rounded-3xl p-8 md:p-12">
          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-500/20 dark:bg-cyan-500/[0.1] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-white/40">{isZh ? '邮箱' : 'Email'}</div>
                <a href="mailto:1468381314@qq.com" className="text-gray-900 dark:text-white/90 font-medium hover:text-cyan-500 dark:hover:text-cyan-400/90 transition-colors">
                  1468381314@qq.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-500/20 dark:bg-cyan-500/[0.1] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-white/40">{isZh ? '位置' : 'Location'}</div>
                <div className="text-gray-900 dark:text-white/90 font-medium">中国 · 武汉</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-500/20 dark:bg-cyan-500/[0.1] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-white/40">{isZh ? '微信' : 'WeChat'}</div>
                <div className="text-gray-900 dark:text-white/90 font-medium">1468381314</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:1468381314@qq.com"
              className="group px-8 py-4 bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-500/80 dark:hover:bg-cyan-500 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {isZh ? '发送邮件' : 'Send Email'}
            </a>

            <a
              href="https://github.com/GaoFei2025-0314"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border border-gray-300 dark:border-white/[0.15] hover:border-gray-400 dark:hover:border-white/[0.25] text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/[0.06] rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border border-gray-300 dark:border-white/[0.15] hover:border-gray-400 dark:hover:border-white/[0.25] text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/[0.06] rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}