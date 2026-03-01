import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import BackgroundManager from './components/BackgroundManager'
import CastleGate from './components/CastleGate'
import EpicIntro from './components/EpicIntro'
import TitleReveal from './components/TitleReveal'
import Quiz from './components/Quiz'
import SacredScroll from './components/SacredScroll'
import Achievements from './components/Achievements'
import TreasureChest from './components/TreasureChest'
import FloatingParticles from './components/FloatingParticles'
import MusicPlayer from './components/MusicPlayer'

function App() {
  const [currentScene, setCurrentScene] = useState('gate')
  const [musicStarted, setMusicStarted] = useState(false)

  const scenes = ['gate', 'intro', 'title', 'quiz', 'scroll', 'achievements', 'treasure']

  const nextScene = () => {
    const currentIndex = scenes.indexOf(currentScene)
    if (currentIndex < scenes.length - 1) {
      setCurrentScene(scenes[currentIndex + 1])
    }
  }

  const handleGateUnlock = () => {
    setMusicStarted(true)
    nextScene()
  }

  return (
    <div className="app" style={{ minHeight: '100vh', position: 'relative' }}>
      
      <BackgroundManager currentScene={currentScene} />
      
      <FloatingParticles />
      
      {musicStarted && <MusicPlayer />}

      <AnimatePresence mode="wait">
        {currentScene === 'gate' && (
          <CastleGate key="gate" onUnlock={handleGateUnlock} />
        )}
        
        {currentScene === 'intro' && (
          <EpicIntro key="intro" onComplete={nextScene} />
        )}
        
        {currentScene === 'title' && (
          <TitleReveal key="title" onContinue={nextScene} />
        )}
        
        {currentScene === 'quiz' && (
          <Quiz key="quiz" onComplete={nextScene} />
        )}
        
        {currentScene === 'scroll' && (
          <SacredScroll key="scroll" onContinue={nextScene} />
        )}
        
        {currentScene === 'achievements' && (
          <Achievements key="achievements" onContinue={nextScene} />
        )}
        
        {currentScene === 'treasure' && (
          <TreasureChest key="treasure" />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App