import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'

const TitleReveal = ({ onContinue }) => {
  const [showConfetti, setShowConfetti] = useState(true)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)
    
    const timer = setTimeout(() => setShowConfetti(false), 6000)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timer)
    }
  }, [])

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
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* CRIMSON & BLACK CONFETTI */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          colors={[
            '#8b1a2b',  // crimson
            '#c41e3a',  // scarlet
            '#4a0000',  // blood
            '#ee2424',  // silver
            '#1f1f1f',  // dark grey
            '#53080e',  // rose
            '#030303'   // antique gold
          ]}
          recycle={false}
          numberOfPieces={250}
        />
      )}

      {/* CROWN ICON */}
      <motion.img
        src="/images/icons/crown.png"
        alt="Crown"
        initial={{ y: -100, opacity: 0, rotate: -15 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ delay: 0.3, type: 'spring', bounce: 0.5 }}
        style={{
          width: '130px',
          height: 'auto',
          filter: 'drop-shadow(0 0 30px rgba(139, 26, 43, 0.6))'
        }}
      />

      {/* MAIN TITLE */}
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', bounce: 0.4 }}
        className="blood-text"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.5rem, 10vw, 5.5rem)',
          color: 'var(--ghost-white)',
          textShadow: `
            4px 4px 8px rgba(0, 0, 0, 0.95),
            0 0 50px rgba(22, 3, 6, 0.6),
            0 0 100px rgba(74, 0, 0, 0.4)
          `,
          marginTop: '25px',
          marginBottom: '15px',
          letterSpacing: '5px'
        }}
      >
        THE LEGEND OF FASIH
      </motion.h1>

      {/* CHAPTER */}
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1.3rem, 4vw, 2.2rem)',
          color: 'var(--rose)',
          fontStyle: 'italic',
          marginBottom: '25px',
          textShadow: '3px 3px 10px rgba(0, 0, 0, 0.9)'
        }}
      >
        Chapter 23: The Senior's Birthday Quest
      </motion.h2>

      {/* SUBTITLE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.4rem',
          color: 'var(--soft-white)',
          maxWidth: '650px',
          lineHeight: 1.8,
          marginBottom: '40px'
        }}
      >
        A tale of the bravest knight who captured my heart 
        <br />
        <span style={{ 
          color: 'var(--scarlet)', 
          fontFamily: 'var(--font-letter)',
          textShadow: '0 0 25px rgba(201, 98, 115, 0.74)'
        }}>
          ~ From enemies to soulmates ~
        </span>
      </motion.p>

      {/* SWORD & SHIELD ICON */}
      <motion.img
        src="/images/icons/sword-sheild.png"
        alt="Sword and Shield"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
        style={{
          width: '100px',
          height: 'auto',
          marginBottom: '40px',
          filter: 'drop-shadow(0 0 20px rgba(184, 147, 77, 0.4))'
        }}
      />

      {/* CONTINUE BUTTON */}
      <motion.button
        className="medieval-btn"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onContinue}
      >
        Begin The Quest
      </motion.button>
    </motion.div>
  )
}

export default TitleReveal