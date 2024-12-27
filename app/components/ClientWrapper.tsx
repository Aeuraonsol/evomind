'use client'
import { useState, useEffect } from 'react'
import MouseEffect from './MouseEffect'
import NeuralNetwork from './NeuralNetwork'
import DnaHelix from './DnaHelix'
import ComingSoon from './ComingSoon'
import ContinueButton from './ContinueButton'

export default function ClientWrapper() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <MouseEffect />
      <NeuralNetwork />
      <DnaHelix />
      <ComingSoon />
      <ContinueButton />
    </>
  )
} 