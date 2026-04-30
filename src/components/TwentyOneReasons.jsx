import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TWENTY_ONE_REASONS } from '../config'

// Sticker Component
function ReasonSticker({ reason, index, isRevealed, onClick }) {
  const colors = ['#ff69b4', '#ffd700', '#00ffff', '#da70d6', '#4169e1', '#ff7f7f', '#98ff98']
  const color = colors[index % colors.length]
  
  return (
    <motion.div
      layoutId={`sticker-${index}`}
      className="relative"
      initial={{ scale: 0, rotate: Math.random() * 20 - 10 }}
      animate={{ 
        scale: isRevealed ? 1 : 0.9,
        rotate: isRevealed ? 0 : Math.random() * 10 - 5
      }}
      whileHover={{ scale: 1.1, zIndex: 10 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <motion.div
        className="p-4 rounded-lg cursor-pointer"
        style={{
          backgroundColor: color,
          boxShadow: isRevealed 
            ? `0 0 20px ${color}, 0 8px 32px rgba(0,0,0,0.2)` 
            : '0 4px 16px rgba(0,0,0,0.1)'
        }}
      >
        <div className="bg-white/90 p-3 rounded">
          <p className="font-['Gaegu'] text-lg text-center text-[#1a1a2e] leading-relaxed">
            {reason}
          </p>
        </div>
        
        {/* Heart decoration */}
        <motion.div
          className="absolute -top-2 -right-2 text-2xl"
          animate={isRevealed ? { scale: [1, 1.3, 1] } : { scale: 1 }}
          transition={{ repeat: isRevealed ? Infinity : 0, duration: 1 }}
        >
          💖
        </motion.div>
        
        {/* Number badge */}
        <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
          <span className="font-['Cherry_Bomb_One'] text-[#4169e1]">{index + 1}</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Main TwentyOneReasons Component
export default function TwentyOneReasons({ onNavigate }) {
  const [revealedItems, setRevealedItems] = useState(new Set())
  const [showAll, setShowAll] = useState(false)

  const toggleItem = (index) => {
    const newRevealed = new Set(revealedItems)
    if (newRevealed.has(index)) {
      newRevealed.delete(index)
    } else {
      newRevealed.add(index)
    }
    setRevealedItems(newRevealed)
  }

  const revealAll = () => {
    setShowAll(true)
    setRevealedItems(new Set(TWENTY_ONE_REASONS.map((_, i) => i)))
  }

  const revealedCount = revealedItems.size

  return (
    <div className="min-h-screen py-20 px-4">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 className="text-5xl md:text-7xl font-['Cherry_Bomb_One'] text-[#ff69b4] mb-4"
            style={{
              textShadow: '2px 2px 0 #ffd700, 4px 4px 0 #00ffff'
            }}>
          21 Reasons Why 💝
        </h2>
        <p className="text-xl font-['Gaegu'] text-[#da70d6]">
          Click each sticker to reveal the love! 
          <span className="ml-2 text-[#ffd700]">({revealedCount}/21)</span>
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="flex justify-center gap-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.button
          onClick={revealAll}
          className="px-6 py-2 bg-[#ffd700] text-[#4169e1] font-['Cherry_Bomb_One'] rounded-full shadow-lg hover:shadow-[0_0_20px_#ffd700]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ✨ Reveal All
        </motion.button>
        <motion.button
          onClick={() => onNavigate(0)}
          className="px-6 py-2 bg-[#00ffff] text-[#4169e1] font-['Cherry_Bomb_One'] rounded-full shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back
        </motion.button>
      </motion.div>

      {/* Sticker Grid */}
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence>
            {TWENTY_ONE_REASONS.map((reason, index) => (
              <ReasonSticker
                key={index}
                reason={reason}
                index={index}
                isRevealed={showAll || revealedItems.has(index)}
                onClick={() => toggleItem(index)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Completion Message */}
      <AnimatePresence>
        {revealedCount === 21 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center mt-16"
          >
            <motion.div
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#ff69b4] to-[#da70d6] rounded-2xl shadow-2xl"
              animate={{ 
                boxShadow: [
                  '0 0 20px #ff69b4',
                  '0 0 40px #ffd700',
                  '0 0 20px #ff69b4'
                ]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <p className="font-['Gaegu'] text-2xl text-white">
                🎉 You discovered all 21 reasons! 🎉
              </p>
            </motion.div>
            
            <motion.button
              onClick={() => onNavigate(2)}
              className="mt-6 px-8 py-3 bg-[#00ffff] text-[#4169e1] font-['Cherry_Bomb_One'] text-xl rounded-full shadow-lg hover:shadow-[0_0_30px_#00ffff]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              🌸 See the Finale →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}