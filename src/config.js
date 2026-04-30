// ============================================
// Y2K RETRO-POP SCRAPBOOK CONFIG
// Edit this file to customize your scrapbook!
// ============================================

// 🎵 BACKGROUND MUSIC
// Replace with your own music URL (MP3)
export const BACKGROUND_MUSIC = {
  url: 'https://assets.mixkit.co/music/preview/mixkit-happy-children-113.mp3',
  title: 'Happy Birthday Mix!',
  artist: 'DJ Kai'
}

// 🖼️ HERO SECTION - CRT TV FRAME
export const HERO_VIDEO = {
  // Use a video URL or GIF - replace with your own!
  videoUrl: 'https://media.giphy.com/media/LpDmM2wSt6HmUw0a/giphy.gif',
  altText: 'Birthday Girl'
}

// 📸 PHOTO FRAMES - Floating Windows
// Add your own photos here! Types: 'polaroid' | 'cassette' | 'filmstrip'
export const PHOTO_FRAMES = [
  {
    id: 1,
    type: 'polaroid',
    src: 'https://picsum.photos/300/350?random=1',
    alt: 'Memory 1',
    label: 'Day One ✨',
    rotation: -5,
    size: 'medium'
  },
  {
    id: 2,
    type: 'filmstrip',
    src: 'https://picsum.photos/400/200?random=2',
    alt: 'Memory 2',
    label: 'Film Roll 🎞️',
    rotation: 3,
    size: 'large'
  },
  {
    id: 3,
    type: 'cassette',
    src: 'https://picsum.photos/250/250?random=3',
    alt: 'Memory 3',
    label: ' mixtape ',
    rotation: -2,
    size: 'small'
  },
  {
    id: 4,
    type: 'polaroid',
    src: 'https://picsum.photos/300/350?random=4',
    alt: 'Memory 4',
    label: 'Bestie Vibes 💕',
    rotation: 4,
    size: 'medium'
  },
  {
    id: 5,
    type: 'polaroid',
    src: 'https://picsum.photos/300/350?random=5',
    alt: 'Memory 5',
    label: 'Adventure 🌍',
    rotation: -3,
    size: 'medium'
  }
]

// 💝 21 REASONS WHY - The Sentimental Core
// Edit these with your own messages!
export const TWENTY_ONE_REASONS = [
  'Your laugh is my favorite song 🎵',
  'You always know how to make me smile 😊',
  'Your heart is pure gold ✨',
  'You\'re the best adventure partner 🌍',
  'Your creativity inspires me 🎨',
  'You make everyone feel special 💖',
  'Your strength amazes me 💪',
  'You\'re beautifully unapologetic 🔥',
  'Your kindness changes lives 🌟',
  'You dance like nobody\'s watching 💃',
  'Your friendship is a gift 🎁',
  'You see beauty in everything 🌸',
  'Your energy is contagious ⚡',
  'You\'re my biggest cheerleader 📣',
  'Your courage inspires me 🌈',
  'You make the ordinary extraordinary ✨',
  'Your loyalty is unmatched 💎',
  'You believe in the impossible 🌙',
  'Your smile lights up any room ☀️',
  'You\'re wonderfully weird 🎭',
  '21 years of being absolutely amazing 🎂'
]

// 🌸 GROWTH FINALE - Counter & Flowers
export const COUNTER_CONFIG = {
  targetNumber: 21,
  flowerColors: ['#ff69b4', '#ffd700', '#00ffff', '#da70d6', '#ff6b6b'],
  flowerCount: 50
}

// 💌 FINAL LETTER
export const LETTER_CONTENT = {
  title: 'A Note to My Favorite Person',
  message: `Happy 21st Birthday! 🎉

You're not just my best friend - you're my person. The one I call when something amazing happens, the one who makes ordinary days feel like adventures.

Here's to 21 years of you being absolutely incredible. May this year bring you everything your beautiful heart desires.

I love you more than all the stars in the sky! 🌟

Forever yours,
Your Person 💕`
}

// 🎨 COLOR PALETTE
export const COLORS = {
  pink: '#ff69b4',
  yellow: '#ffd700',
  cyan: '#00ffff',
  purple: '#da70d6',
  blue: '#4169e1',
  coral: '#ff7f7f',
  mint: '#98ff98'
}

// 📱 RESPONSIVE BREAKPOINTS
export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px'
}