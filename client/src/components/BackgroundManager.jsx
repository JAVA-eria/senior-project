import { motion, AnimatePresence } from 'framer-motion'

const BackgroundManager = ({ currentScene }) => {

  const backgrounds = {
    castle: '/images/backgrounds/bg-castle.jpeg',
    throne: '/images/backgrounds/bg-throne.jpeg',
    treasure: '/images/backgrounds/bg-treasure.jpeg'
  }

  // Crimson & Black fallback gradients
  const gradients = {
    castle: 'radial-gradient(ellipse at bottom, #1a0505 0%, #0d0303 50%, #030303 100%)',
    throne: 'radial-gradient(ellipse at top, #150808 0%, #0a0404 50%, #030303 100%)',
    treasure: 'radial-gradient(ellipse at center, #1a0a0a 0%, #0d0505 40%, #030303 100%)'
  }

  const sceneToImage = {
    gate: 'castle',
    intro: 'castle',
    title: 'throne',
    quiz: 'throne',
    photos: 'throne',
    scroll: 'treasure',
    achievements: 'treasure',
    treasure: 'treasure'
  }

  // Dark overlays with subtle red tint
  const overlays = {
    gate: 'rgba(5, 2, 2, 0.75)',
    intro: 'rgba(3, 1, 1, 0.88)',
    title: 'rgba(8, 3, 3, 0.6)',
    quiz: 'rgba(6, 2, 2, 0.7)',
    photos: 'rgba(7, 3, 3, 0.65)',
    scroll: 'rgba(10, 5, 5, 0.55)',
    achievements: 'rgba(8, 3, 3, 0.6)',
    treasure: 'rgba(15, 8, 8, 0.4)'
  }

  const currentBgKey = sceneToImage[currentScene] || 'castle'
  const bgImage = backgrounds[currentBgKey]
  const bgGradient = gradients[currentBgKey]
  const overlayColor = overlays[currentScene] || 'rgba(5, 2, 2, 0.7)'

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden'
    }}>
      
      {/* BACKGROUND */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBgKey}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '-5%',
            left: '-5%',
            width: '110%',
            height: '110%',
            backgroundImage: `url(${bgImage}), ${bgGradient}`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <motion.div
        animate={{ backgroundColor: overlayColor }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />

      {/* CRIMSON AMBIENT GLOW */}
      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '150%',
          height: '150%',
          background: 'radial-gradient(circle, rgba(139, 26, 43, 0.2) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />

      {/* VIGNETTE */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(3, 3, 3, 0.8) 100%)',
        pointerEvents: 'none'
      }} />
    </div>
  )
}

export default BackgroundManager