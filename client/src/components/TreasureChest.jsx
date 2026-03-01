import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'

const TreasureChest = () => {
  const [opened, setOpened] = useState(false)
  const [showFinalMessage, setShowFinalMessage] = useState(false)
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
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleOpen = () => {
    setOpened(true)
    setTimeout(() => setShowFinalMessage(true), 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      {/* CRIMSON & BLACK CONFETTI */}
      {opened && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          colors={[
            '#8b1a2b',
            '#c41e3a', 
            '#4a0000',
            '#d64550',
            '#c0c0c0',
            '#b8934d',
            '#1f1f1f'
          ]}
          recycle={true}
          numberOfPieces={220}
        />
      )}

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="chest-closed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ scale: 1.3, opacity: 0 }}
            style={{ textAlign: 'center' }}
          >
            {/* HEADING */}
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 6vw, 3rem)',
              color: 'var(--ghost-white)',
              marginBottom: '40px',
              letterSpacing: '4px',
              textShadow: `
                3px 3px 8px rgba(0, 0, 0, 0.95),
                0 0 40px rgba(139, 26, 43, 0.5)
              `
            }}>
              The Final Treasure Awaits
            </h2>

            {/* TREASURE CHEST */}
            <motion.img
              src="/images/icons/treasure-chest.png"
              alt="Treasure Chest"
              animate={{
                y: [0, -15, 0],
                filter: [
                  'drop-shadow(0 0 30px rgba(139, 26, 43, 0.5))',
                  'drop-shadow(0 0 50px rgba(184, 147, 77, 0.6))',
                  'drop-shadow(0 0 30px rgba(139, 26, 43, 0.5))'
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              onClick={handleOpen}
              style={{
                width: '180px',
                height: 'auto',
                cursor: 'pointer'
              }}
            />

            <p style={{
              marginTop: '30px',
              fontFamily: 'var(--font-body)',
              fontSize: '1.3rem',
              color: 'var(--rose)',
              fontStyle: 'italic'
            }}>
              Click to open your treasure...
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="chest-opened"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', bounce: 0.4, delay: 0.3 }}
            style={{ textAlign: 'center', maxWidth: '800px' }}
          >
            {/* FLOATING HEARTS */}
            <div style={{ position: 'relative', marginBottom: '30px', height: '60px' }}>
              {[...Array(12)].map((_, i) => (
                <motion.span
                  key={i}
                  animate={{
                    y: [0, -150, -300],
                    x: [0, (i % 2 === 0 ? 50 : -50), (i % 2 === 0 ? -30 : 30)],
                    opacity: [1, 1, 0],
                    scale: [0.8, 1.3, 0.5],
                    rotate: [0, (i % 2 === 0 ? 20 : -20), 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  style={{
                    position: 'absolute',
                    left: `${10 + i * 7}%`,
                    fontSize: '1.8rem',
                    filter: 'drop-shadow(0 0 8px rgba(139, 26, 43, 0.6))'
                  }}
                >
                  ❤️
                </motion.span>
              ))}
            </div>

            {/* CROWN */}
            <motion.img
              src="/images/icons/crown.png"
              alt="Crown"
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              style={{
                width: '140px',
                height: 'auto',
                marginBottom: '25px',
                filter: 'drop-shadow(0 0 40px rgba(139, 26, 43, 0.6))'
              }}
            />

            {showFinalMessage && (
              <>
                {/* MAIN BIRTHDAY MESSAGE */}
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="blood-text"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2.5rem, 10vw, 5.5rem)',
                    color: 'var(--ghost-white)',
                    textShadow: `
                      5px 5px 10px rgba(0, 0, 0, 0.95),
                      0 0 60px rgba(139, 26, 43, 0.6),
                      0 0 120px rgba(74, 0, 0, 0.4)
                    `,
                    marginBottom: '25px',
                    letterSpacing: '5px'
                  }}
                >
                  Happy Birthday, Fasih!
                </motion.h1>

                {/* SUBTITLE */}
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(1.3rem, 4vw, 2rem)',
                    color: 'var(--soft-white)',
                    marginBottom: '40px',
                    lineHeight: 1.8
                  }}
                >
                  You are my greatest treasure, my senior knight in shining armor,
                  <br />
                  and the love of my life.
                </motion.p>

                {/* ROMANTIC BOX */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                  style={{
                    background: 'linear-gradient(135deg, var(--deep-crimson), var(--blood))',
                    padding: '35px 50px',
                    borderRadius: '15px',
                    border: '2px solid var(--silver)',
                    marginBottom: '40px',
                    boxShadow: `
                      0 15px 50px rgba(74, 0, 0, 0.5),
                      inset 0 0 30px rgba(139, 26, 43, 0.3),
                      0 0 40px rgba(139, 26, 43, 0.2)
                    `
                  }}
                >
                  <p 
                    className="letter-text"
                    style={{
                      fontFamily: 'var(--font-letter)',
                      fontSize: '1.7rem',
                      color: 'var(--ghost-white)',
                      lineHeight: 1.9
                    }}
                  >
                    From enemies to lovers,
                    <br />
                    From strangers to soulmates.
                    <br />
                    <span style={{ color: 'var(--rose)' }}>
                      You're my forever, baby.
                    </span>
                  </p>
                </motion.div>

                {/* HEARTS */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: '20px',
                    marginBottom: '35px',
                    fontSize: '2.2rem'
                  }}
                >
                  <span>🖤</span>
                  <span>❤️</span>
                  <span>🖤</span>
                </motion.div>

                {/* SIGNATURE */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="letter-text"
                  style={{
                    fontFamily: 'var(--font-letter)',
                    fontSize: '1.5rem',
                    color: 'var(--rose)',
                    fontStyle: 'italic'
                  }}
                >
                  With all my love,
                  <br />
                  Your Baby ❤️
                </motion.p>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default TreasureChest