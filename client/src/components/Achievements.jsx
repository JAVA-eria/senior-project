import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Achievements = ({ onContinue }) => {
  const [unlockedCount, setUnlockedCount] = useState(0)

  // CUSTOMIZE THESE REASONS YOU LOVE HIM!
  const achievements = [
    {
      icon: '˚⟡˖ ࣪',
      title: 'Legendary Listener',
      points: '+1000 Patience',
      description: 'For listening to all my yapping without ever complaining'
    },
    {
      icon: '⋆༺𓆩🗡𓆪༻⋆',
      title: 'Strong Knight',
      points: '+2000 Strength',
      description: 'For loving me even when it was hard'
    },
    {
      icon: '❤️‍🩹',
      title: 'My Fav Therapist',
      points: '+2000 Co-op',
      description: 'For healing me in so many ways'
    },
    {
      icon: '🤝🏻',
      title: 'Constant Companion',
      points: '+1500 Support',
      description: 'For always having my back no matter what'
    },
    {
      icon: '( ˶ˆᗜˆ˵ )',
      title: 'Joy Bringer',
      points: '+800 Happiness',
      description: 'For making me laugh when I need it most'
    },
    {
      icon: 'જ⁀➴♡ ',
      title: 'Heart Stealer',
      points: '+9999 Love',
      description: 'For being the only one who truly has my heart'
    },
    {
      icon: '⚽',
      title: 'My Fav Athlete',
      points: '+700 Power',
      description: 'For Just because you are good at football hehe.'
    },
    {
      icon: '🎀',
      title: 'Mr. fineshyt',
      points: '+2000 Handsome',
      description: 'For being so handsome and pretty.'
    },
        {
      icon: '♕',
      title: 'My Senior King',
      points: '+∞ Everything',
      description: 'For simply being you, Fasih. My everything.'
    }
  ]

  const allUnlocked = unlockedCount >= achievements.length

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        minHeight: '100vh',
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ textAlign: 'center', marginBottom: '40px' }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🥇</div>
        <h2 style={{
          fontFamily: 'Cinzel, serif',
          fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
          color: 'var(--pale-gold)',
          marginBottom: '10px'
        }}>
          Achievements Unlocked
        </h2>
        <p style={{
          fontFamily: 'Crimson Text, serif',
          fontSize: '1.1rem',
          color: 'var(--warm-white)',
          fontStyle: 'italic'
        }}>
          Reasons why I love you, my senior knight
        </p>
        <p style={{
          marginTop: '15px',
          color: 'var(--gold)',
          fontSize: '0.95rem'
        }}>
          Tap each card to unlock • {unlockedCount}/{achievements.length} discovered
        </p>
      </motion.div>

      {/* Achievement Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        width: '100%',
        maxWidth: '900px',
        marginBottom: '40px'
      }}>
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            achievement={achievement}
            delay={index * 0.1}
            onUnlock={() => setUnlockedCount(prev => prev + 1)}
          />
        ))}
      </div>

      {/* Continue Button */}
      <AnimatePresence>
        {allUnlocked && (
          <motion.button
            className="medieval-btn"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContinue}
          >
            Claim The Final Treasure
          </motion.button>
        )}
      </AnimatePresence>

      {!allUnlocked && (
        <p style={{
          color: 'var(--warm-white)',
          opacity: 0.7,
          fontStyle: 'italic'
        }}>
          Unlock all achievements to continue...
        </p>
      )}
    </motion.div>
  )
}

const AchievementCard = ({ achievement, delay, onUnlock }) => {
  const [unlocked, setUnlocked] = useState(false)

  const handleClick = () => {
    if (!unlocked) {
      setUnlocked(true)
      onUnlock()
    }
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay }}
      whileHover={{ scale: unlocked ? 1 : 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      style={{
        background: unlocked
          ? 'linear-gradient(135deg, rgba(139,0,0,0.3), rgba(45,45,45,0.8))'
          : 'rgba(45, 45, 45, 0.6)',
        border: unlocked
          ? '2px solid var(--gold)'
          : '2px solid var(--dark-stone)',
        borderRadius: '15px',
        padding: '25px',
        cursor: unlocked ? 'default' : 'pointer',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '180px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      {!unlocked ? (
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🔒︎</div>
          <p style={{ color: 'var(--warm-white)', opacity: 0.7 }}>
            Tap to unlock
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.5 }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '10px' }}>
            {achievement.icon}
          </div>
          <h3 style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '1.2rem',
            color: 'var(--pale-gold)',
            marginBottom: '5px'
          }}>
            {achievement.title}
          </h3>
          <p style={{
            color: '#4ade80',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            marginBottom: '10px'
          }}>
            {achievement.points}
          </p>
          <p style={{
            fontFamily: 'Crimson Text, serif',
            color: 'var(--warm-white)',
            fontSize: '0.95rem',
            fontStyle: 'italic'
          }}>
            "{achievement.description}"
          </p>
        </motion.div>
      )}

      {unlocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />
      )}
    </motion.div>
  )
}

export default Achievements