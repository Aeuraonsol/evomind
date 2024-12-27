'use client'
import { useEffect, useState } from 'react'

export default function ComingSoon() {
  const [mounted, setMounted] = useState(false)
  const [dots, setDots] = useState('...')
  
  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 500)
    
    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed top-16 left-1/2 -translate-x-1/2 z-20">
      <div className="relative">
        <div className="bg-black/30 backdrop-blur-md px-6 py-2 rounded-full 
                      border border-blue-500/30 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]
                      animate-pulse">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-300 font-['Monaco'] tracking-wider text-sm">
              CA: Coming Soon{dots}
            </span>
          </div>
        </div>

        <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 
                      rounded-full blur-sm -z-10"></div>
        
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-blue-400/10 to-transparent 
                        rotate-45 translate-x-[-100%] animate-[scan_3s_ease-in-out_infinite]"></div>
        </div>

        <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-blue-400/50"></div>
        <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-blue-400/50"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-blue-400/50"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-blue-400/50"></div>
      </div>
    </div>
  )
} 
