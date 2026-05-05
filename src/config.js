export const ASSETS = {
  camera: '/Polaroid_Now_Instant_Camera_Generation_3___Polaroid_US-removebg-preview.png',
  cassette: '/WmgAGI0N-removebg-preview.png',
  clickHand: '/指漫画の手をクリックイラスト画像とPSDフリー素材透過の無料ダウンロード_-_Pngtree-removebg-preview.png',
  envelope: '/envelope.png',
  exclamation: '/__-removebg-preview.png',
  folder: '/folder.png',
  googleEyes: '/google eyes.png',
  heroPrint: '/img.jpg',
  petal: '/z_v0-Q8Y-removebg-preview.png',
  photoStrip: '/polaroid-picture.png',
  sunflower: '/Sunflower_flower_png_isolated_on_transparent_background___Premium_AI-generated_PSD-removebg-preview.png',
}

export const SITE_COPY = {
  birthdayGirl: 'Kai',
  title: 'For Kai',
  subtitle:
    'A romantic birthday dossier, assembled from tiny proofs of love, soft paper, warm music, and the kind of beauty you keep returning to.',
  dateLabel: 'twenty one',
  catalog: 'Birthday Archive 021',
}

export const BACKGROUND_MUSIC = {
  url: 'https://assets.mixkit.co/music/preview/mixkit-sweet-dreams-114.mp3',
  title: 'Soft birthday radio',
  artist: 'Curated for Kai',
}

export const HERO_NOTES = [
  'the comfort giver',
  'the room softener',
  'the main character',
  'the sweetest proof',
]

export const DOSSIER_ROWS = [
  { label: 'name', value: 'Kai' },
  { label: 'date', value: 'May 2026' },
  { label: 'edition', value: 'Twenty First' },
  { label: 'role', value: 'The Love Everyone Remembers' },
]

export const MEMORY_FILES = [
  {
    id: '01',
    title: 'First Proof',
    caption: 'Every version of you has been worth saving.',
    kind: 'note card',
  },
  {
    id: '02',
    title: 'Favorite Light',
    caption: 'The room always knows when you arrive.',
    kind: 'contact sheet',
  },
  {
    id: '03',
    title: 'Soft Witness',
    caption: 'A whole archive of little moments saying: she was here, and it mattered.',
    kind: 'folder tab',
  },
]

export const TWENTY_ONE_REASONS = [
  'Your smile changes the whole room.',
  'You make ordinary days feel dressed up.',
  'You love people with your whole heart.',
  'Your laugh is instantly recognizable.',
  'You are gentle without being fragile.',
  'You make confidence look beautiful.',
  'You notice the tiny details.',
  'You turn chaos into a story worth telling.',
  'Your style has its own signature.',
  'You are soft, funny, and powerful at once.',
  'You make people feel chosen.',
  'You carry light into every season.',
  'Your friendship feels like home.',
  'You keep growing without losing yourself.',
  'You romanticize life in the best way.',
  'You are brave about becoming more you.',
  'You make love feel easy to believe in.',
  'You are unforgettable in the quiet ways.',
  'You deserve flowers for every version of you.',
  'You are the plot twist and the happy ending.',
  'Because 21 years of Kai is worth celebrating loudly.',
]

export const REASON_MEDIA = TWENTY_ONE_REASONS.map((_, index) => {
  const number = index + 1

  if (number === 4 || number === 9) {
    return { type: 'video', src: `/vid${number}` }
  }

  return { type: 'image', src: `/img${number}` }
})

export const LETTER_CONTENT = {
  title: 'A letter tucked inside the folder',
  message: [
    'Happy 21st birthday, Kai.',
    'I wanted this to feel like something found in a box years from now: warm paper, old photos, a little music still playing somewhere, and every page quietly insisting that you were loved with intention.',
    'You are easy to celebrate because you make life feel more tender. You notice things. You care deeply. You bring a softness that does not ask permission to be powerful.',
    'I hope this year gives you calm love, brave joy, beautiful surprises, and proof after proof that the world is kinder with you in it.',
    'Always in your corner.',
  ],
}
