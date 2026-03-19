'use client'

import { useEffect, useRef, useCallback } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseRadius: number
  alpha: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number>(0)
  const timeRef = useRef<number>(0)

  const createParticle = useCallback((canvas: HTMLCanvasElement): Particle => {
    // 位置更分散，不随机铺满
    const gridSize = Math.sqrt(canvas.width * canvas.height / 60)
    const gridX = Math.floor(Math.random() * (canvas.width / gridSize))
    const gridY = Math.floor(Math.random() * (canvas.height / gridSize))

    return {
      x: gridX * gridSize + (Math.random() - 0.5) * gridSize * 0.8,
      y: gridY * gridSize + (Math.random() - 0.5) * gridSize * 0.8,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1.5,
      baseRadius: Math.random() * 2 + 1.5,
      alpha: Math.random() * 0.3 + 0.2
    }
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

    const createParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 12000)
      particlesRef.current = []
      for (let i = 0; i < count; i++) {
        particlesRef.current.push(createParticle(canvas))
      }
    }

    const drawParticles = () => {
      timeRef.current += 0.008
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current

      // 绘制粒子
      particles.forEach(p => {
        // 缓慢漂移
        p.x += p.vx
        p.y += p.vy

        // 边界反弹，缓慢转向
        if (p.x < 0 || p.x > canvas.width) p.vx *= -0.5
        if (p.y < 0 || p.y > canvas.height) p.vy *= -0.5

        // 保持速度很小
        p.vx = Math.max(-0.5, Math.min(0.5, p.vx + (Math.random() - 0.5) * 0.02))
        p.vy = Math.max(-0.5, Math.min(0.5, p.vy + (Math.random() - 0.5) * 0.02))

        // 鼠标交互 - 柔和吸引
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 300 && dist > 0) {
          const force = Math.pow((300 - dist) / 300, 2) * 0.8
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }

        // 限制最大速度
        const maxSpeed = 1.5
        const currentSpeed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (currentSpeed > maxSpeed) {
          p.vx = (p.vx / currentSpeed) * maxSpeed
          p.vy = (p.vy / currentSpeed) * maxSpeed
        }

        // 粒子大小呼吸效果
        const breathe = Math.sin(timeRef.current + p.x * 0.01 + p.y * 0.01) * 0.3
        p.radius = p.baseRadius + breathe

        // 绘制柔和的发光粒子
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${p.alpha})`)
        gradient.addColorStop(0.4, `rgba(255, 255, 255, ${p.alpha * 0.3})`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // 粒子核心
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 1.5})`
        ctx.fill()
      })

      // 绘制连线 - 更细、更淡、若隐若现
      for (let i = 0; i < particles.length; i++) {
        // 只检查最近的几个粒子，减少计算
        for (let j = i + 1; j < Math.min(i + 5, particles.length); j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          // 更远的连线阈值，更淡的透明度
          if (dist < 180) {
            const alpha = Math.pow((180 - dist) / 180, 2) * 0.15
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        // 鼠标连线 - 稍微明显一点
        const p = particles[i]
        const mdx = mouse.x - p.x
        const mdy = mouse.y - p.y
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
        if (mDist < 250) {
          const alpha = Math.pow((250 - mDist) / 250, 1.5) * 0.25
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(249, 115, 22, ${alpha})` // 橙色连线
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }

      // 鼠标位置柔和光晕
      const mouseGradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 100)
      mouseGradient.addColorStop(0, 'rgba(249, 115, 22, 0.15)')
      mouseGradient.addColorStop(0.5, 'rgba(249, 115, 22, 0.05)')
      mouseGradient.addColorStop(1, 'rgba(249, 115, 22, 0)')
      ctx.beginPath()
      ctx.arc(mouse.x, mouse.y, 100, 0, Math.PI * 2)
      ctx.fillStyle = mouseGradient
      ctx.fill()

      animationRef.current = requestAnimationFrame(drawParticles)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    resize()
    createParticles()
    drawParticles()

    window.addEventListener('resize', () => {
      resize()
      createParticles()
    })
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [createParticle])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{
        background: 'radial-gradient(ellipse at center, #0f0f0f 0%, #000000 100%)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
      }}
    />
  )
}