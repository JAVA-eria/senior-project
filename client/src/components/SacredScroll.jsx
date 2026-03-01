import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const SacredScroll = ({ onContinue }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [showButton, setShowButton] = useState(false)

  // YOUR LOVE LETTER
  const loveLetterText = `
                 My Dearest Fasih,

    If we were two sunflowers, I would have faced you
                 instead of the sun.

    As I write this, my heart overflows with the love
    I hold for you, because at the end of the day,
    you are the person I want to come home to.
    You are the person I want to tell how my day went.
    I can never explain how grateful I am to God
    for letting you into my life.

    You complete me in ways words cannot describe.
    You make me feel alive and real.
    You exist in every thought of mine.
    In fact, you exist in every moment of my existence.
    I have never felt such calm, peace, and stability
    in love until you.

    You make me realize that love is not supposed
    to be mind games.
    It is just two people who are there for each other
    in every way possible.

    My heart beats faster at the thought of you,
    whenever I imagine spending an eternity
    in this world with you and beyond it too.
    Your little giggles light up my heart
    in the most beautiful ways possible.

    Whenever I am with you,
    every other noise and thought blurs in my mind.
    I cease to exist in my own reality
    and drift gently into the dreams of us,
    and I desire nothing more than that.

    I will love you
    as long as the sun burns in the sky,
    as long as the moon shines in the night,
    until the raging sea gives in to the shore.

    I will love you
    until the end of time
    and beyond.

          Happy Birthday, my love.
  I hope this day is as special as you are to me.

                   With all my love,
                       Your Javeria

  `

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < loveLetterText.length) {
        setDisplayedText(loveLetterText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        setTimeout(() => setShowButton(true), 500)
      }
    }, 25)

    return () => clearInterval(timer)
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
        padding: '40px 20px'
      }}
    >
      {/* HEADER */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ textAlign: 'center', marginBottom: '30px' }}
      >
        <motion.img
          src="/images/icons/scroll.png"
          alt="Sacred Scroll"
          style={{
            width: '80px',
            height: 'auto',
            marginBottom: '15px',
            filter: 'drop-shadow(0 0 20px rgba(139, 26, 43, 0.5))'
          }}
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.8rem, 6vw, 3rem)',
          color: 'var(--ghost-white)',
          letterSpacing: '4px',
          textShadow: `
            3px 3px 6px rgba(0, 0, 0, 0.95),
            0 0 30px rgba(139, 26, 43, 0.4)
          `
        }}>
          The Sacred Scroll
        </h2>
      </motion.div>

      {/* PARCHMENT SCROLL */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="parchment-bg"
        style={{
          width: '100%',
          maxWidth: '750px',
          padding: '50px 45px',
          borderRadius: '12px',
          boxShadow: `
            0 15px 50px rgba(0, 0, 0, 0.7),
            0 0 40px rgba(139, 26, 43, 0.2),
            inset 0 0 30px rgba(0, 0, 0, 0.1)
          `,
          position: 'relative',
          border: '3px solid var(--aged-silver)'
        }}
      >
        {/* WAX SEAL */}
        <motion.img
          src="/images/icons/wax-seal.png"
          alt="Wax Seal"
          style={{
            position: 'absolute',
            top: '-25px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: 'auto',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))'
          }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: 'spring' }}
        />

        {/* QUILL */}
        <motion.img
          src="/images/icons/quill.png"
          alt="Quill"
          style={{
            position: 'absolute',
            top: '20px',
            right: '-25px',
            width: '55px',
            height: 'auto',
            transform: 'rotate(35deg)',
            opacity: 0.6
          }}
        />

        {/* LETTER CONTENT */}
        <div 
          className="letter-text"
          style={{
            fontFamily: 'var(--font-letter)',
            fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
            color: '#1a1a1a',
            lineHeight: 2,
            whiteSpace: 'pre-wrap',
            minHeight: '450px'
          }}
        >
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            style={{ color: 'var(--crimson)' }}
          >
            |
          </motion.span>
        </div>

        {/* DECORATIVE CORNERS */}
        <div style={{
          position: 'absolute',
          top: '15px',
          left: '15px',
          color: 'var(--crimson)',
          fontSize: '1.8rem',
          opacity: 0.4
        }}>❧</div>
        <div style={{
          position: 'absolute',
          bottom: '15px',
          right: '15px',
          color: 'var(--crimson)',
          fontSize: '1.8rem',
          opacity: 0.4,
          transform: 'rotate(180deg)'
        }}>❧</div>
      </motion.div>

      {/* CONTINUE BUTTON */}
      {showButton && (
        <motion.button
          className="medieval-btn"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onContinue}
          style={{ marginTop: '40px' }}
        >
          Continue The Journey
        </motion.button>
      )}
    </motion.div>
  )
}

export default SacredScroll