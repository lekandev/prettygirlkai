import { motion } from 'framer-motion'

const bubbleColors = [
  'rgba(255, 105, 180, 0.3)',  // pink
  'rgba(255, 215, 0, 0.3)',    // yellow
  'rgba(0, 255, 255, 0.3)',    // cyan
  'rgba(218, 112, 214, 0.3)',  // purple
  'rgba(65, 105, 225, 0.3)',   // blue
  'rgba(255, 127, 127, 0.3)',  // coral
]

function Bubble({ size, x, color, delay }) {
  return (
    <motion.div
      className="absolute rounded-full blur-sm"
      style={{
        width: size,
        height: size,
        left: x,
        backgroundColor: color,
        boxShadow: `0 0 ${size * 0.5}px ${color}`,
      }}
      initial={{ y: '110%', opacity: 0 }}
      animate={{
        y: ['110%', '-10%'],
        opacity: [0, 0.8, 0],
        x: [0, Math.sin(Math.random() * Math.PI * 2) * 50],
      }}
      transition={{
        duration: 15 + Math.random() * 10,
        repeat: Infinity,
        delay,
        ease: 'linear',
      }}
    />
  )
}

export default function FloatingBubbles() {
  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: 20 + Math.random() * 60,
    x: `${Math.random() * 100}%`,
    color: bubbleColors[i % bubbleColors.length],
    delay: Math.random() * 10,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <Bubble key={bubble.id} {...bubble} />
      ))}
    </div>
  )
}