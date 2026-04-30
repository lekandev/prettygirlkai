import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { COUNTER_CONFIG, LETTER_CONTENT } from '../config'

// Flower Component
function Flower({ x, y, color, delay }) {
  return (
    <motion.div
      className="absolute text-4xl"
      style={{ left: x, top: y }}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ 
        scale: [0, 1.2, 1],
        rotate: [0, 15, -15, 0],
        y: [0, -20, 0]
      }}
      transition={{
        delay,
        duration: 2,
        repeat: Infinity,
        repeatDelay: Math.random() * 3
      }}
    >
      🌸
    </motion.div>
  )
}

// Counter Component
function Counter({ target, current, onComplete }) {
  useEffect(() => {
    if (current >= target) {
      onComplete()
    }
  }, [current, target, onComplete])

  return (
    <div className="text-center">
      <motion.div
        className="inline-block"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="text-8xl md:text-9xl font-['Cherry_Bomb_One'] text-[#ffd700]"
              style={{
                textShadow: '4px 4px 0 #ff69b4, -4px -4px 0 #00ffff, 0 0 30px #ffd700'
              }}>
          {current}
        </span>
      </motion.div>
      <p className="text-2xl font-['Gaegu'] text-[#00ffff] mt-2">years young!</p>
    </div>
  )
}

// Letter Component
function Letter() {
  const lines = LETTER_CONTENT.message.split('\n')
  
  return (
    <motion.div
      className="max-w-lg mx-auto p-8"
      initial={{ rotate: -2 }}
      whileHover={{ rotate: 0 }}
    >
      {/* Paper texture effect */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative bg-[#fff8dc] p-8 rounded-lg shadow-2xl transform rotate-1">
        {/* Washi tape decoration */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-[#ff69b4]/60 rotate-2" />
        
        <h3 className="text-2xl font-['Cherry_Bomb_One'] text-[#4169e1] text-center mb-6">
          {LETTER_CONTENT.title}
        </h3>
        
        <div className="font-['Gaegu'] text-lg text-[#2d2d2d] leading-8 space-y-4">
          {lines.map((line, index) => (
            <p key={index} className={line.startsWith(' ') ? 'pl-8' : ''}>
              {line}
            </p>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-4 right-4 text-3xl">💕</div>
        <div className="absolute top-4 left-4 text-2xl">✨</div>
      </div>
    </motion.div>
  )
}

// Main Growth Finale Component
export default function GrowthFinale() {
  const [count, setCount] = useState(0)
  const [showFlowers, setShowFlowers] = useState(false)
  const [showLetter, setShowLetter] = useState(false)

  const handleComplete = () => {
    setShowFlowers(true)
    setTimeout(() => setShowLetter(true), 2000)
  }

  // Auto-increment counter
  useEffect(() => {
    if (count < COUNTER_CONFIG.targetNumber) {
      const timer = setTimeout(() => {
        setCount(prev => prev + 1)
      }, 500)
      return () => clearTimeout(timer)
    } else if (count === COUNTER_CONFIG.targetNumber && !showFlowers) {
      handleComplete()
    }
  }, [count, showFlowers])

  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 className="text-5xl md:text-7xl font-['Cherry_Bomb_One'] text-[#da70d6] mb-2"
            style={{
              textShadow: '2px 2px 0 #00ffff, 4px 4px 0 #ff69b4'
            }}>
          🌸 Growth Finale 🌸
        </h2>
        <p className="text-xl font-['Gaegu'] text-[#4169e1]">
          Watch her bloom into 21! ✨
        </p>
      </motion.div>

      {/* Counter */}
      <div className="flex justify-center mb-12">
        <Counter 
          target={COUNTER_CONFIG.targetNumber} 
          current={count} 
          onComplete={handleComplete}
        />
      </div>

      {/* Flowers Animation */}
      <AnimatePresence>
        {showFlowers && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-10"
          >
            {Array.from({ length: COUNTER_CONFIG.flowerCount }).map((_, i) => (
              <Flower
                key={i}
                x={`${Math.random() * 100}%`}
                y={`${Math.random() * 100}%`}
                color={COUNTER_CONFIG.flowerColors[i % COUNTER_CONFIG.flowerColors.length]}
                delay={Math.random() * 2}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Letter */}
      <AnimatePresence>
        {showLetter && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="mt-12"
          >
            <Letter />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back Button */}
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          onClick={() => {}}
          className="px-6 py-2 bg-[#00ffff] text-[#4169e1] font-['Cherry_Bomb_One'] rounded-full shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to 21 Reasons
        </motion.button>
      </motion.div>
    </div>
  )
}