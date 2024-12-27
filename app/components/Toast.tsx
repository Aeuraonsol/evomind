'use client'
import { useState, useEffect } from 'react'

interface ToastProps {
  message: string
  isVisible: boolean
  onClose: () => void
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!mounted) {
    return null
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50
                    animate-fade-in">
      <div className="bg-black/70 backdrop-blur-md px-6 py-3 rounded-lg
                    border border-blue-500/30 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]">
        <span className="text-blue-300 font-['Monaco'] tracking-wider text-sm">
          {message}
        </span>
      </div>
    </div>
  )
} 