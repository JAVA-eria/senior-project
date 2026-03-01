import { useState } from 'react'
import { motion } from 'framer-motion'

const CastleGate = ({ onUnlock }) => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [unlocking, setUnlocking] = useState(false)

  const CORRECT_PASSWORD = 'ILoveYou'

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (password.toLowerCase() === CORRECT_PASSWORD.toLowerCase()) {
      setUnlocking(true)
      setTimeout(() => {
        onUnlock()
      }, 2000)
    } else {
      setError(true)
      setTimeout(() => setError(false), 1500)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* LEFT TORCH */}
      <motion.img
        src="/images/icons/torch.png"
        alt="Torch"
        className="torch-glow"
        style={{
          position: 'absolute',
          left: '8%',
          top: '20%',
          width: '80px',
          height: 'auto'
        }}
        animate={{ 
          rotate: [0, 1.5, -1.5, 0],
          scale: [1, 1.02, 0.98, 1]
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      
      {/* RIGHT TORCH */}
      <motion.img
        src="/images/icons/torch.png"
        alt="Torch"
        className="torch-glow"
        style={{
          position: 'absolute',
          right: '8%',
          top: '20%',
          width: '80px',
          height: 'auto',
          transform: 'scaleX(-1)'
        }}
        animate={{ 
          rotate: [0, -1.5, 1.5, 0],
          scale: [1, 0.98, 1.02, 1]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
      />

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          textAlign: 'center',
          marginBottom: '30px'
        }}
      >
        {/* CASTLE ICON */}
        <motion.img
          src="/images/icons/castle-gate.png"
          alt="Castle Gate"
          className="crimson-glow"
          style={{
            width: '140px',
            height: 'auto',
            marginBottom: '25px'
          }}
        />
        
        {/* HEADING */}
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          color: 'var(--ghost-white)',
          textShadow: `
            3px 3px 6px rgba(0, 0, 0, 0.95),
            0 0 40px rgba(139, 26, 43, 0.5),
            0 0 80px rgba(74, 0, 0, 0.3)
          `,
          marginBottom: '15px',
          letterSpacing: '4px'
        }}>
          The Castle Gate
        </h1>

        {/* SUBTITLE */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.3rem',
          color: 'var(--rose)',
          fontStyle: 'italic',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9)'
        }}>
          "Only the worthy knight may enter..."
        </p>
      </motion.div>

      {/* LOCK ICON */}
      <motion.img
        src={unlocking ? "/images/icons/lock-open.png" : "/images/icons/lock-closed.png"}
        alt="Lock"
        animate={unlocking ? { 
          rotate: [0, -15, 15, -10, 0],
          scale: [1, 1.2, 1.3, 1.1, 1]
        } : error ? {
          x: [-12, 12, -12, 12, 0]
        } : {
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: unlocking ? 0.7 : 2.5, 
          repeat: unlocking ? 0 : Infinity,
          ease: 'easeInOut'
        }}
        style={{
          width: '70px',
          height: 'auto',
          marginBottom: '35px',
          filter: 'drop-shadow(0 0 15px rgba(139, 26, 43, 0.6))'
        }}
      />

      {/* PASSWORD FORM */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '25px',
          width: '100%',
          maxWidth: '400px'
        }}
      >
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Speak the secret word..."
          disabled={unlocking}
          style={{
            width: '100%',
            padding: '18px 28px',
            fontSize: '1.1rem',
            fontFamily: 'var(--font-body)',
            background: 'rgba(8, 8, 8, 0.95)',
            border: `2px solid ${error ? 'var(--scarlet)' : 'var(--aged-silver)'}`,
            borderRadius: '8px',
            color: 'var(--ghost-white)',
            textAlign: 'center',
            outline: 'none',
            transition: 'all 0.3s ease',
            boxShadow: `
              0 4px 25px rgba(0, 0, 0, 0.6),
              inset 0 0 20px rgba(139, 26, 43, 0.1),
              inset 0 0 60px rgba(0, 0, 0, 0.3)
            `
          }}
          onFocus={(e) => {
            e.target.style.borderColor = 'var(--crimson)'
            e.target.style.boxShadow = `
              0 4px 25px rgba(0, 0, 0, 0.6),
              0 0 20px rgba(139, 26, 43, 0.3),
              inset 0 0 20px rgba(139, 26, 43, 0.15)
            `
          }}
          onBlur={(e) => {
            e.target.style.borderColor = error ? 'var(--scarlet)' : 'var(--aged-silver)'
            e.target.style.boxShadow = `
              0 4px 25px rgba(0, 0, 0, 0.6),
              inset 0 0 20px rgba(139, 26, 43, 0.1),
              inset 0 0 60px rgba(0, 0, 0, 0.3)
            `
          }}
        />

        <motion.button
          type="submit"
          className="medieval-btn"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          disabled={unlocking}
        >
          {unlocking ? 'Entering...' : 'Enter'}
        </motion.button>

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              color: 'var(--scarlet)',
              fontStyle: 'italic',
              fontFamily: 'var(--font-body)',
              textShadow: '0 0 10px rgba(196, 30, 58, 0.4)'
            }}
          >
            "The gate remains sealed. Try again, brave soul."
          </motion.p>
        )}
      </motion.form>

      {/* HINT */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 3 }}
        style={{
          marginTop: '45px',
          fontSize: '1rem',
          color: 'var(--soft-rose)',
          fontStyle: 'italic',
          fontFamily: 'var(--font-body)'
        }}
      >
        ❤︎- Hint: What does your lady say to you every day?
      </motion.p>

      {/* CHAIN DECORATIONS */}
      <img
        src="/images/icons/chain.png"
        alt="Chain"
        style={{
          position: 'absolute',
          top: '8%',
          left: '3%',
          width: '50px',
          opacity: 0.25,
          filter: 'brightness(0.6)'
        }}
      />
      <img
        src="/images/icons/chain.png"
        alt="Chain"
        style={{
          position: 'absolute',
          top: '8%',
          right: '3%',
          width: '50px',
          opacity: 0.25,
          filter: 'brightness(0.6)'
        }}
      />
    </motion.div>
  )
}

export default CastleGate