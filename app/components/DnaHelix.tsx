'use client'
import { useEffect, useState } from 'react'

export default function DnaHelix() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute left-0 h-full w-[300px] overflow-hidden opacity-50">
      <div 
        className="relative h-full w-full"
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: 'center center',
          transition: 'transform 0.05s linear'
        }}
      >
        {[...Array(30)].map((_, i) => (
          <div key={i} className="relative">
            <div 
              className="absolute h-3 w-3 rounded-full bg-blue-400/70"
              style={{
                left: `${Math.sin(i * 0.5) * 40 + 150}px`,
                top: `${i * 20}px`,
                animation: `pulse 2s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            />
            <div 
              className="absolute h-3 w-3 rounded-full bg-purple-400/70"
              style={{
                left: `${Math.sin((i * 0.5) + Math.PI) * 40 + 150}px`,
                top: `${i * 20}px`,
                animation: `pulse 2s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            />
            <div 
              className="absolute h-[2px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
              style={{
                left: '110px',
                width: '80px',
                top: `${i * 20 + 6}px`,
                transform: `rotate(${Math.sin(i * 0.5) * 45}deg)`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
} 