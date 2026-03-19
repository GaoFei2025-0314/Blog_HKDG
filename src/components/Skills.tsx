'use client'

import { useLanguage } from '@/contexts/ThemeContext'

const skillCategories = [
  {
    name: 'AI & ML',
    skills: ['PyTorch', '深度学习', 'OpenCV', 'Transformer', '机器学习', 'YOLO'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    name: '机器人',
    skills: ['ROS2', 'SLAM', '运动规划', '多传感器融合', '水下机器人', '风动船'],
    color: 'from-cyan-500 to-teal-500'
  },
  {
    name: '数字孪生',
    skills: ['Unity', 'Unreal Engine', 'WebGL', 'Three.js'],
    color: 'from-purple-500 to-cyan-500'
  },
  {
    name: '工程化',
    skills: ['Python', 'C++', 'TypeScript', 'Docker', 'Kubernetes'],
    color: 'from-cyan-500 to-emerald-500'
  }
]

export default function Skills() {
  const { language } = useLanguage()

  const isZh = language === 'zh'

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/[0.06] rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-500/[0.06] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {isZh ? '技能' : 'Skills'} <span className="text-cyan-500 dark:text-cyan-400">& Expertise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {isZh ? '技术栈与专业领域' : 'Tech Stack & Expertise'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className="bg-white/60 dark:bg-white/[0.03] dark:backdrop-blur-xl backdrop-blur-md border border-gray-200/50 dark:border-white/[0.08] rounded-2xl p-6 hover:border-cyan-500/50 dark:hover:border-cyan-400/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-1 h-6 bg-gradient-to-b ${category.color} rounded-full`} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white/90">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] text-gray-700 dark:text-white/60 text-sm rounded-full hover:bg-cyan-500/15 dark:hover:bg-cyan-500/10 hover:border-cyan-500/20 dark:hover:border-cyan-400/20 hover:text-cyan-600 dark:hover:text-cyan-400/80 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/60 dark:bg-white/[0.03] dark:backdrop-blur-xl backdrop-blur-md border border-gray-200/50 dark:border-white/[0.08] rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white/90 mb-6">
            {isZh ? '工作经历' : 'Work Experience'}
          </h3>
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 bg-cyan-500 rounded-full mt-2" />
            <div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white/90">
                {isZh ? 'AI工程化研发负责人' : 'AI Engineering R&D Lead'}
              </div>
              <div className="text-gray-600 dark:text-white/60">
                {isZh ? '某软硬件初创公司 · 2018-至今' : 'Tech Startup · 2018-Present'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}