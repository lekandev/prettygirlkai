import { motion } from 'framer-motion'
import { HERO_VIDEO, PHOTO_FRAMES } from '../config'

// Frame Components
const PolaroidFrame = ({ src, alt, label, rotation }) => (
  <motion.div
    className="bg-white p-3 pb-8 shadow-xl"
    style={{ transform: `rotate(${rotation}deg)` }}
    whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
    drag
    dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
  >
    <div className="bg-[#ff69b4] p-1">
      <img src={src} alt={alt} className="w-full h-48 object-cover" />
    </div>
    <p className="text-center text-sm mt-2 font-['Gaegu'] text-[#4169e1]">{label}</p>
  </motion.div>
)

const FilmstripFrame = ({ src, alt, label, rotation }) => (
  <motion.div
    className="bg-black p-2 shadow-2xl"
    style={{ transform: `rotate(${rotation}deg)` }}
    whileHover={{ scale: 1.05, zIndex: 10 }}
    drag
    dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
  >
    <div className="flex gap-1">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-20 h-24 bg-gray-800 overflow-hidden">
          <img src={src} alt={alt} className="w-full h-full object-cover opacity-80" />
        </div>
      ))}
    </div>
    <p className="text-center text-xs text-[#00ffff] mt-2 font-['Cherry_Bomb_One']">{label}</p>
  </motion.div>
)

const CassetteFrame = ({ src, alt, label, rotation }) => (
  <motion.div
    className="bg-gradient-to-br from-[#4169e1] to-[#da70d6] p-4 rounded-lg shadow-2xl"
    style={{ transform: `rotate(${rotation}deg)` }}
    whileHover={{ scale: 1.05, zIndex: 10 }}
    drag
    dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
  >
    <div className="bg-gray-800 p-2 rounded">
      <img src={src} alt={alt} className="w-32 h-32 object-cover rounded" />
    </div>
    <div className="flex justify-center gap-2 mt-2">
      <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-400" />
      <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-400" />
    </div>
    <p className="text-center text-xs text-white mt-2 font-['Itim']">{label}</p>
  </motion.div>
)

// CRT TV Frame Component
const CRTTVFrame = ({ videoUrl, altText }) => (
  <motion.div
    className="relative"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {/* TV Frame */}
    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-[30px] shadow-2xl">
      {/* Screen */}
      <div className="crt-effect relative w-80 h-60 bg-black rounded-lg overflow-hidden">
        <img src={videoUrl} alt={altText} className="w-full h-full object-cover" />
        
        {/* CRT Scanlines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" 
               style={{ backgroundSize: '100% 4px' }} />
        </div>
        
        {/* Screen Glow */}
        <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(255,215,0,0.3)]" />
      </div>
      
      {/* TV Controls */}
      <div className="flex justify-center gap-4 mt-4">
        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <div className="w-3 h-3 rounded-full bg-blue-500" />
      </div>
    </div>
    
    {/* Antenna */}
    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
      <div className="w-1 h-8 bg-gray-600 rounded-full" />
      <div className="absolute -top-4 -left-6 w-12 h-8 border-l-2 border-t-2 border-gray-500 rounded-t-full" />
      <div className="absolute -top-4 -right-6 w-12 h-8 border-r-2 border-t-2 border-gray-500 rounded-t-full" />
    </div>
  </motion.div>
)

// Main Hero Dashboard Component
export default function HeroDashboard({ onNavigate }) {
  const renderFrame = (frame) => {
    const props = {
      key: frame.id,
      src: frame.src,
      alt: frame.alt,
      label: frame.label,
      rotation: frame.rotation
    }

    switch (frame.type) {
      case 'filmstrip':
        return <FilmstripFrame {...props} />
      case 'cassette':
        return <CassetteFrame {...props} />
      default:
        return <PolaroidFrame {...props} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      {/* Title */}
      <motion.h1
        className="text-6xl md:text-8xl font-['Cherry_Bomb_One'] text-[#ffd700] text-center mb-4"
        style={{
          textShadow: '3px 3px 0 #ff69b4, -3px -3px 0 #00ffff, 3px -3px 0 #da70d6, -3px 3px 0 #4169e1'
        }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        HAPPY 21ST! 🎂
      </motion.h1>

      <motion.p
        className="text-2xl font-['Gaegu'] text-[#00ffff] mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Welcome to Kai's Digital Scrapbook ✨
      </motion.p>

      {/* Main Content Grid */}
      <div className="relative w-full max-w-6xl">
        {/* CRT TV - Center */}
        <div className="flex justify-center mb-16">
          <CRTTVFrame videoUrl={HERO_VIDEO.videoUrl} altText={HERO_VIDEO.altText} />
        </div>

        {/* Floating Photo Frames */}
        <div className="flex flex-wrap justify-center gap-8">
          {PHOTO_FRAMES.map((frame, index) => (
            <motion.div
              key={frame.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {renderFrame(frame)}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <motion.div
        className="flex gap-4 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.button
          onClick={() => onNavigate(1)}
          className="px-8 py-3 bg-[#ff69b4] text-white font-['Cherry_Bomb_One'] text-xl rounded-full shadow-lg hover:shadow-[0_0_30px_#ff69b4]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          💝 21 Reasons Why
        </motion.button>
        <motion.button
          onClick={() => onNavigate(2)}
          className="px-8 py-3 bg-[#00ffff] text-[#4169e1] font-['Cherry_Bomb_One'] text-xl rounded-full shadow-lg hover:shadow-[0_0_30px_#00ffff]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          🌸 Growth Finale
        </motion.button>
      </motion.div>
    </div>
  )
}