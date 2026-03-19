'use client'

import { useEffect, useRef, useCallback } from 'react'

interface MatrixColumn {
  x: number
  y: number
  speed: number
  chars: string[]
  color: string
  fadeStart: number
}

const MATRIX_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>?/\\|~`+= -'

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const columnsRef = useRef<MatrixColumn[]>([])
  const animationRef = useRef<number>(0)
  const speedFactorRef = useRef<number>(1)

  const initColumns = useCallback((canvas: HTMLCanvasElement, isDark: boolean) => {
    const columnCount = Math.floor(canvas.width / 20)
    const columns: MatrixColumn[] = []

    // 暗色模式速度快，浅色模式速度慢（2倍慢）
    const baseSpeed = isDark ? 2.5 : 1

    for (let i = 0; i < columnCount; i++) {
      const chars: string[] = []
      const charCount = Math.floor(Math.random() * 20) + 10
      for (let j = 0; j < charCount; j++) {
        chars.push(MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)])
      }

      const fadeStart = Math.random() * 0.4 + 0.3

      columns.push({
        x: i * 20,
        y: Math.random() * canvas.height,
        speed: (Math.random() * 1 + 0.5) * baseSpeed,
        chars,
        color: isDark ? '#00ffff' : '#0088aa',
        fadeStart
      })
    }

    columnsRef.current = columns
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const draw = () => {
      const currentIsDark = document.documentElement.classList.contains('dark')
      const bgColor = currentIsDark ? '#000000' : '#f5f5f5'
      const textColor = currentIsDark ? '#00ffff' : '#0891b2'

      // 更新速度因子
      speedFactorRef.current = currentIsDark ? 1 : 0.5

      // 绘制背景，带位置相关的渐变
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.7
      )
      gradient.addColorStop(0, currentIsDark ? '#0a0a0a' : '#ffffff')
      gradient.addColorStop(1, bgColor)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (columnsRef.current.length === 0) {
        initColumns(canvas, currentIsDark)
      }

      const columns = columnsRef.current

      columns.forEach((col, index) => {
        col.y += col.speed * speedFactorRef.current

        // 循环位置
        if (col.y > canvas.height + col.chars.length * 20) {
          col.y = -col.chars.length * 20
          col.chars = col.chars.map(() => MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)])
        }

        col.chars.forEach((char, charIndex) => {
          const y = col.y + charIndex * 20

          if (y < -20 || y > canvas.height + 20) return

          const normalizedY = y / canvas.height

          let alpha = 1
          if (charIndex === 0) {
            alpha = 1
          } else {
            const fadeRange = 1 - col.fadeStart
            if (normalizedY > col.fadeStart) {
              alpha = Math.max(0.1, 1 - (normalizedY - col.fadeStart) / fadeRange)
            } else {
              alpha = Math.max(0.3, 1 - charIndex / col.chars.length)
            }
          }

          if (charIndex === 0) {
            ctx.fillStyle = currentIsDark ? '#ffffff' : '#1a1a1a'
            ctx.shadowColor = textColor
            ctx.shadowBlur = 10
          } else {
            const colPositionFactor = (col.x / canvas.width)
            const brightness = 0.7 + colPositionFactor * 0.3

            const r = parseInt(textColor.slice(1, 3), 16)
            const g = parseInt(textColor.slice(3, 5), 16)
            const b = parseInt(textColor.slice(5, 7), 16)
            ctx.fillStyle = `rgba(${Math.floor(r * brightness)}, ${Math.floor(g * brightness)}, ${Math.floor(b * brightness)}, ${alpha})`
            ctx.shadowBlur = 0
          }

          ctx.font = '16px monospace'
          ctx.fillText(char, col.x, y)
        })

        // 绘制列的渐隐背景
        if (index % 2 === 0) {
          const colGradient = ctx.createLinearGradient(col.x, 0, col.x, canvas.height)
          const colPosition = col.x / canvas.width
          const opacity = (0.02 + colPosition * 0.02) * (currentIsDark ? 1 : 0.5)

          colGradient.addColorStop(0, `rgba(0, 255, 255, ${opacity})`)
          colGradient.addColorStop(0.5, `rgba(0, 255, 255, ${opacity * 0.5})`)
          colGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

          ctx.fillStyle = colGradient
          ctx.fillRect(col.x - 5, 0, 15, canvas.height)
        }
      })

      ctx.shadowBlur = 0

      if (columnsRef.current.length === 0 ||
          columnsRef.current[0]?.color !== (currentIsDark ? '#00ffff' : '#0891b2')) {
        initColumns(canvas, currentIsDark)
      }

      animationRef.current = requestAnimationFrame(draw)
    }

    resize()
    initColumns(canvas, document.documentElement.classList.contains('dark'))
    draw()

    const handleResize = () => {
      resize()
      initColumns(canvas, document.documentElement.classList.contains('dark'))
    }

    const observer = new MutationObserver(() => {
      initColumns(canvas, document.documentElement.classList.contains('dark'))
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
    }
  }, [initColumns])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
      }}
    />
  )
}