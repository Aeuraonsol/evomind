'use client'
import { useState, useEffect } from 'react'
import Toast from './Toast'

export default function ContinueButton() {
  const [mounted, setMounted] = useState(false)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = () => {
    setShowToast(true)
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-8 right-8
                 bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-md
                 px-8 py-3 rounded-full border border-blue-400/30
                 transition-all duration-300 hover:scale-105
                 group relative overflow-hidden z-50"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent 
                      via-blue-400/10 to-transparent translate-x-[-100%] 
                      group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        
        <span className="relative text-blue-300 font-['Monaco'] tracking-wider">
          Continue to dApp
        </span>

        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-blue-400/50"></div>
        <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-blue-400/50"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-blue-400/50"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-blue-400/50"></div>
      </button>

      <Toast 
        message="🚧 dApp is under development" 
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  )
} 