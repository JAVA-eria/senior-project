import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const MusicPlayer = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)

  useEffect(() => {
    audioRef.current = new Audio()
    // PUT YOUR MUSIC FILE IN public/music/background.mp3
    audioRef.current.src = '/music/background.mp3'
    audioRef.current.loop = true
    audioRef.current.volume = volume

    const playPromise = audioRef.current.play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: 'rgba(13, 13, 13, 0.8)',
        padding: '10px 15px',
        borderRadius: '30px',
        border: '1px solid var(--gold)'
      }}
    >
      <button
        onClick={toggleMusic}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--gold)',
          fontSize: '1.5rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isPlaying ? '🎵' : '🔇'}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={(e) => {
          const newVolume = parseFloat(e.target.value)
          setVolume(newVolume)
          if (audioRef.current) {
            audioRef.current.volume = newVolume
          }
        }}
        style={{
          width: '80px',
          accentColor: 'var(--crimson)'
        }}
      />
    </motion.div>
  )
}

export default MusicPlayer