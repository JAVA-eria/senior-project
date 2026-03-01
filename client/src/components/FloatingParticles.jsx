import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const FloatingParticles = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      type: Math.random() > 0.7 ? 'ember' : 'dust'
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1,
      overflow: 'hidden'
    }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            background: particle.type === 'ember' 
              ? 'radial-gradient(circle, #FF6B35 0%, #8B0000 100%)'
              : 'radial-gradient(circle, rgba(212,175,55,0.6) 0%, rgba(212,175,55,0) 100%)',
            boxShadow: particle.type === 'ember'
              ? '0 0 10px #FF6B35'
              : 'none'
          }}
          animate={{
            y: [0, -200, -400],
            x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.3]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  )
}

export default FloatingParticles