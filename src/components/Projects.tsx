'use client'

import { useLanguage } from '@/contexts/ThemeContext'

const projects = [
  {
    title: '智能巡检机器人平台',
    description: '基于视觉 AI 的工业设备自动化巡检解决方案，支持实时缺陷检测与异常预警',
    role: '技术负责人',
    tags: ['ROS2', 'PyTorch', 'YOLOv8', 'OpenCV', 'SLAM'],
    color: 'from-cyan-500 to-blue-500',
    link: 'https://blog-70a.pages.dev/projects'
  },
  {
    title: '工厂数字孪生系统',
    description: '实时可视化工厂运行状态，支持预测性维护与能耗优化',
    role: '全栈开发 & 架构设计',
    tags: ['Three.js', 'React', 'Node.js', 'InfluxDB', 'MQTT'],
    color: 'from-cyan-500 to-teal-500',
    link: '#'
  },
  {
    title: 'AI 写作助手',
    description: '基于大语言模型的智能写作辅助工具，支持多风格内容生成',
    role: '独立开发',
    tags: ['Next.js', 'OpenAI API', 'TypeScript', 'Prisma'],
    color: 'from-purple-500 to-cyan-500',
    link: '#'
  },
  {
    title: '实时协作白板',
    description: '支持多人实时协作的在线白板应用，集成思维导图与流程图',
    role: '前端负责人',
    tags: ['React', 'Socket.io', 'Canvas', 'Node.js'],
    color: 'from-teal-500 to-cyan-500',
    link: '#'
  },
  {
    title: '自动化测试平台',
    description: '企业级 UI 自动化测试平台，支持跨浏览器并行执行',
    role: '后端架构',
    tags: ['Python', 'Playwright', 'Docker', 'Redis'],
    color: 'from-blue-500 to-cyan-500',
    link: '#'
  },
  {
    title: '数据可视化大屏',
    description: '实时数据监控与可视化分析平台，支持百万级数据点渲染',
    role: '全栈开发',
    tags: ['D3.js', 'React', 'WebSocket', 'ClickHouse'],
    color: 'from-cyan-500 to-emerald-500',
    link: '#'
  }
]

export default function Projects() {
  const { language } = useLanguage()

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'zh' ? '精选' : 'Featured '}
            <span className="text-cyan-500 dark:text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto">
            {language === 'zh' ? '从概念到落地的工程实践' : 'Engineering practice from concept to implementation'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/60 dark:bg-white/[0.03] dark:backdrop-blur-xl backdrop-blur-md border border-gray-200/50 dark:border-white/[0.08] rounded-2xl p-6 hover:border-cyan-500/50 dark:hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="text-7xl font-bold text-gray-200 dark:text-white/[0.06] absolute top-4 right-6 select-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="text-sm text-cyan-600 dark:text-cyan-400/80 mb-2 font-medium">
                {project.role}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white/90 mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400/90 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-white/60 mb-5 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] text-gray-600 dark:text-white/60 text-xs rounded-full group-hover:bg-cyan-500/15 group-hover:border-cyan-500/20 group-hover:text-cyan-600 dark:group-hover:text-cyan-400/80 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target={project.link.startsWith('http') ? '_blank' : undefined}
                rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center text-cyan-600 dark:text-cyan-400/80 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm font-medium group/link"
              >
                {language === 'zh' ? '查看详情' : 'View Details'}
                <span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}