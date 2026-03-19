'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/ThemeContext'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null)
  const { language } = useLanguage()

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const isZh = language === 'zh'

  return (
    <footer className="py-8 border-t border-gray-200/50 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear ?? new Date().getFullYear()} Gaofei. {isZh ? '保留所有权利。' : 'All rights reserved.'}
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 text-sm"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 text-sm"
            >
              Twitter
            </a>
          </div>

          <p className="text-gray-500 dark:text-gray-500 text-xs">
            Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}