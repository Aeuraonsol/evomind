'use client'
import { useEffect, useRef } from 'react'

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // 增加节点数量和可见度
    const nodes: { x: number; y: number; vx: number; vy: number }[] = []
    for (let i = 0; i < 80; i++) {  // 增加节点数量
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,  // 增加移动速度
        vy: (Math.random() - 0.5) * 1
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 更新和绘制节点
      nodes.forEach(node => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // 增加节点大小和亮度
        ctx.beginPath()
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2)  // 增加节点大小
        ctx.fillStyle = 'rgba(147, 197, 253, 0.8)'  // 增加不透明度
        ctx.fill()
      })

      // 绘制连线
      nodes.forEach((node1, i) => {
        nodes.slice(i + 1).forEach(node2 => {
          const dx = node2.x - node1.x
          const dy = node2.y - node1.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {  // 增加连线距离
            ctx.beginPath()
            ctx.moveTo(node1.x, node1.y)
            ctx.lineTo(node2.x, node2.y)
            ctx.strokeStyle = `rgba(147, 197, 253, ${0.4 * (1 - distance / 150)})`  // 增加线条亮度
            ctx.lineWidth = 1.5  // 增加线条宽度
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40" />  // 增加整体不透明度
} 