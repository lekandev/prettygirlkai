import { motion } from 'framer-motion'

export default function MusicController({ isPlaying, onToggle, title }) {
  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="flex items-center gap-3 bg-gradient-to-r from-[#1a1a2e]/90 to-[#2d2d4a]/90 backdrop-blur-md px-4 py-3 rounded-full border border-[#ffd700]/30 shadow-lg"
        whileHover={{ scale: 1.02 }}
      >
        {/* Vinyl Record (rotates when playing) */}
        <motion.div
          className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4169e1] to-[#da70d6]"
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{
            duration: isPlaying ? 2 : 0,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: 'conic-gradient(from 0deg, #4169e1, #da70d6, #ff69b4, #ffd700, #4169e1)',
          }}
        >
          <div className="w-3 h-3 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </motion.div>

        {/* Track Info */}
        <div className="flex flex-col">
          <span className="text-xs text-[#00ffff] font-['Cherry_Bomb_One']">
            {isPlaying ? '▶ NOW PLAYING' : '❚❚ PAUSED'}
          </span>
          <span className="text-sm text-white font-['Gaegu'] truncate max-w-[120px]">
            {title}
          </span>
        </div>

        {/* Play/Pause Button */}
        <motion.button
          onClick={onToggle}
          className="w-10 h-10 rounded-full bg-[#ffd700] flex items-center justify-center shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? (
            <span className="text-lg">⏸️</span>
          ) : (
            <span className="text-lg">▶️</span>
          )}
        </motion.button>
      </motion.div>

      {/* Sound Wave Visualization */}
      {isPlaying && (
        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-[#00ffff] rounded-full"
              animate={{
                height: [8, 20, 8],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  )
}