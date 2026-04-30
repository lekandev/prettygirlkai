import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroDashboard from './components/HeroDashboard'
import TwentyOneReasons from './components/TwentyOneReasons'
import GrowthFinale from './components/GrowthFinale'
import FloatingBubbles from './components/FloatingBubbles'
import MusicController from './components/MusicController'
import { BACKGROUND_MUSIC } from './config'

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const audioRef = useRef(null)

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio(BACKGROUND_MUSIC.url)
    audioRef.current.loop = true
    audioRef.current.volume = 0.3

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e))
      }
      setIsMusicPlaying(!isMusicPlaying)
    }
  }

  const handleSectionChange = (sectionIndex) => {
    setCurrentSection(sectionIndex)
  }

  return (
    <div className="min-h-screen relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%234169e1%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      {/* Glassmorphism Overlay */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(255,105,180,0.1) 0%, rgba(218,112,214,0.1) 50%, rgba(0,255,255,0.1) 100%)'
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Bubbles */}
      <FloatingBubbles />

      {/* Music Controller */}
      <MusicController 
        isPlaying={isMusicPlaying} 
        onToggle={toggleMusic} 
        title={BACKGROUND_MUSIC.title}
      />

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative z-20"
        >
          {currentSection === 0 && (
            <HeroDashboard onNavigate={handleSectionChange} />
          )}
          {currentSection === 1 && (
            <TwentyOneReasons onNavigate={handleSectionChange} />
          )}
          {currentSection === 2 && (
            <GrowthFinale />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Section Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => handleSectionChange(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentSection === index 
                ? 'bg-[#ffd700] scale-125 shadow-[0_0_15px_#ffd700]' 
                : 'bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default App