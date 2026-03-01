import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EpicIntro = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0)
  
  // CUSTOMIZE THESE INTRO LINES!
  const introLines = [
    "In a world where two souls were destined to meet...",
    "Where I found myself in the depths of chaos...",
    "And in the middle of the chaos...",
    "There was you...",
    "That's when ....",
    "A legendary arc began."
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev >= introLines.length - 1) {
          clearInterval(timer)
          setTimeout(onComplete, 1500)
          return prev
        }
        return prev + 1
      })
    }, 2500)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        background: 'linear-gradient(180deg, #0D0D0D 0%, #1A1A1A 100%)'
      }}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={currentLine}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: 'Crimson Text, serif',
            fontSize: 'clamp(1.3rem, 4vw, 2rem)',
            color: 'var(--pale-gold)',
            textAlign: 'center',
            fontStyle: 'italic',
            maxWidth: '800px',
            lineHeight: 1.6,
            textShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
          }}
        >
          {introLines[currentLine]}
        </motion.p>
      </AnimatePresence>

      {/* Progress dots */}
      <div style={{
        display: 'flex',
        gap: '10px',
        marginTop: '60px'
      }}>
        {introLines.map((_, index) => (
          <motion.div
            key={index}
            animate={{
              scale: index === currentLine ? 1.3 : 1,
              background: index <= currentLine ? 'var(--gold)' : 'var(--dark-stone)'
            }}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: '1px solid var(--gold)'
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default EpicIntro