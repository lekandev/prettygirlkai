# 🎂 21st Birthday Digital Scrapbook

A Y2K Retro-Pop themed interactive birthday website built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Hero Dashboard**: Retro CRT TV frame with floating draggable photo frames (polaroid, filmstrip, cassette)
- **21 Reasons Why**: Interactive sticker grid with pop animations
- **Growth Finale**: Animated counter with flower blooming and handwritten letter
- **Music Controller**: Winamp-style floating player
- **Visual Effects**: Floating bubbles, glassmorphism overlay, CRT scanlines

## 🎨 Design

- **Aesthetic**: Y2K Retro-Pop / Retro OS
- **Fonts**: Cherry Bomb One, Gaegu, Itim (Google Fonts)
- **Colors**: Hot pink, gold, cyan, purple, royal blue

## 📁 Project Structure

```
src/
├── config.js          # Editable configuration (music, photos, messages)
├── components/
│   ├── HeroDashboard.jsx      # Main hero section with CRT TV
│   ├── TwentyOneReasons.jsx    # 21 reasons sticker grid
│   ├── GrowthFinale.jsx        # Counter + letter finale
│   ├── FloatingBbubbles.jsx    # Background bubbles
│   └── MusicController.jsx     # Winamp-style player
├── App.jsx            # Main app with section navigation
├── main.jsx           # Entry point
└── index.css          # Global styles + Tailwind
```

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 🔧 Customization

Edit `src/config.js` to customize:
- `BACKGROUND_MUSIC` - Your birthday playlist
- `HERO_VIDEO` - Main video/GIF in CRT frame
- `PHOTO_FRAMES` - Add your own photos
- `TWENTY_ONE_REASONS` - Your 21 messages
- `LETTER_CONTENT` - Your handwritten note

## 📝 License

Made with 💕 for Kai's 21st Birthday!