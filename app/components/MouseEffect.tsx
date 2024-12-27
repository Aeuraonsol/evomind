'use client'
import { useEffect, useState } from 'react'

export default function MouseEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* 主光球 */}
      <div 
        className="pointer-events-none fixed w-[400px] h-[400px] rounded-full blur-[100px] bg-blue-500/30"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          transition: 'all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)',
        }}
      />
      {/* 跟随光球 */}
      <div 
        className="pointer-events-none fixed w-[200px] h-[200px] rounded-full blur-[80px] bg-purple-500/30"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          transition: 'all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1)',
        }}
      />
    </>
  )
} 