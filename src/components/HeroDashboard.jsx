import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ASSETS, DOSSIER_ROWS, HERO_NOTES, MEMORY_FILES, SITE_COPY } from '../config'

function DossierTable() {
  return (
    <div id="dossier" className="relative border border-ink bg-paper shadow-paper">
      <div className="grid grid-cols-[88px_1fr] sm:grid-cols-[120px_1fr]">
        {DOSSIER_ROWS.map((row) => (
          <div key={row.label} className="contents">
            <div className="border-b border-r border-ink px-3 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/65 last:border-b-0">
              {row.label}
            </div>
            <div className="border-b border-ink px-4 py-3 font-script text-[clamp(2.1rem,6vw,5rem)] leading-none text-blueInk last:border-b-0">
              {row.value}
            </div>
          </div>
        ))}
      </div>
      <img
        src={ASSETS.googleEyes}
        alt=""
        className="absolute -bottom-6 left-8 w-12 rotate-[-12deg] drop-shadow-cutout"
      />
    </div>
  )
}

function MemoryFolder() {
  return (
    <section id="archive" className="relative z-10 px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-[1300px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="kicker">contents of the folder</p>
          <h2 className="mt-4 max-w-xl font-serif text-[clamp(3.4rem,8vw,8rem)] italic leading-[0.86] text-ink">
            proof she was loved carefully
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-8 text-ink/68">
            This site is built to be a soft archive of little moments, a digital safespace, and a witness to the fact that you are loved Kaima.
          </p>
        </div>

        <div className="relative min-h-[620px]">
          <img
            src={ASSETS.folder}
            alt=""
            className="absolute inset-x-0 top-2 mx-auto w-[min(760px,100%)] rotate-[2deg] drop-shadow-cutout"
          />
          <div className="relative mx-auto max-w-[520px] pt-24">
            {MEMORY_FILES.map((file, index) => (
              <motion.article
                key={file.id}
                className="relative mb-4 border border-ink bg-cream/92 p-5 shadow-paper"
                style={{ rotate: `${[-2, 1.5, -0.8][index]}deg` }}
                initial={{ y: 28, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.12 }}
              >
                <div className="mb-5 flex items-start justify-between gap-4 border-b border-ink pb-3">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-rust">{file.id}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/55">{file.kind}</span>
                </div>
                <h3 className="font-serif text-4xl italic text-ink">{file.title}</h3>
                <p className="mt-3 leading-7 text-ink/68">{file.caption}</p>
              </motion.article>
            ))}
          </div>
          <img
            src={ASSETS.sunflower}
            alt=""
            className="absolute bottom-4 right-8 w-28 rotate-[18deg] drop-shadow-cutout"
          />
        </div>
      </div>
    </section>
  )
}

export default function HeroDashboard() {
  const [isHeroNoteOpen, setIsHeroNoteOpen] = useState(false)

  return (
    <>
      <section id="home" className="relative z-10 min-h-screen px-5 pb-20 pt-28 sm:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="max-w-4xl">
            <div className="mb-10 flex flex-wrap gap-3">
              {HERO_NOTES.map((note, index) => (
                <motion.span
                  key={note}
                  className="border border-ink bg-cream px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-rust shadow-paper"
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {note}
                </motion.span>
              ))}
            </div>

            <motion.h1
              className="font-serif text-[clamp(3rem,11vw,11rem)] italic leading-[0.72] tracking-[-0.04em] text-rust"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {SITE_COPY.title}
            </motion.h1>

            <motion.div
              className="mt-10 grid max-w-3xl gap-6 border-y border-ink py-6 sm:grid-cols-[0.7fr_1fr]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.18 }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink/55">
                {SITE_COPY.catalog}
                <br />
                {SITE_COPY.dateLabel}
              </p>
              <p className="text-xl leading-8 text-ink/72">{SITE_COPY.subtitle}</p>
            </motion.div>
          </div>

          <motion.div
            className="relative mx-auto min-h-[620px] w-full max-w-[620px]"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            <img
              src={ASSETS.envelope}
              alt=""
              className="absolute left-2 top-24 w-[94%] rotate-[-7deg] drop-shadow-cutout"
            />
            <div className="absolute left-[24%] top-[42%] z-10 w-[44%] rotate-[4deg] border border-ink bg-paper p-3 shadow-paper">
              <img
                src={ASSETS.heroPrint}
                alt="Kai"
                className="aspect-[4/5] w-full border border-ink/25 object-cover"
              />
            </div>
            <img
              src={ASSETS.camera}
              alt=""
              className="absolute left-[17%] top-0 z-20 w-[62%] rotate-[-3deg] drop-shadow-cutout"
            />
            <img
              src={ASSETS.clickHand}
              alt=""
              className="absolute left-0 top-[30%] z-30 w-24 rotate-[-22deg] drop-shadow-cutout"
            />
            <img
              src={ASSETS.exclamation}
              alt=""
              className="absolute bottom-[12%] left-[8%] z-30 w-20 rotate-[-10deg] drop-shadow-cutout"
            />
            <div className="absolute bottom-[7%] right-[3%] z-30 max-w-[220px] border border-ink bg-cream p-4 shadow-paper">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-rust">found note</p>
              <p className="mt-2 font-sans text-sm leading-8 text-blueInk">stop being mean to Ifechukwu :(</p>
            </div>
            <div className="absolute bottom-[30%] right-[4%] z-40">
              <AnimatePresence mode="wait">
                {isHeroNoteOpen ? (
                  <motion.div
                    key="open-note"
                    className="w-56 rotate-[4deg] border border-ink bg-paper p-4 shadow-paper sm:w-64"
                    initial={{ scale: 0.85, opacity: 0, rotate: -5 }}
                    animate={{ scale: 1, opacity: 1, rotate: 4 }}
                    exit={{ scale: 0.85, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 180, damping: 16 }}
                    aria-label="Hidden sweet note"
                  >
                    <div className="border border-ink/25 bg-cream/75 p-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-rust">
                        tiny secret
                      </p>
                      <p className="mt-3 font-script text-4xl leading-8 text-blueInk">
                        you make every thing better, everything
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.button
                    key="closed-note"
                    type="button"
                    onClick={() => setIsHeroNoteOpen(true)}
                    className="rotate-[5deg] border border-ink bg-blush px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-rust shadow-paper transition hover:-translate-y-0.5 hover:bg-cream"
                    initial={{ scale: 0.92, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.92, opacity: 0 }}
                  >
                    click me
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="kicker">birthday girl record</p>
            <h2 className="mt-4 font-serif text-[clamp(3.2rem,8vw,8rem)] italic leading-[0.86] text-ink">
              archived like a beautiful secret
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-ink/68">
              i actually do wish i could archive you like a secret sometimes. but you are meant to be known, celebrated, and loved loudly. so here we are, with a whole record of reasons why you are worth celebrating.
            </p>
          </div>
          <DossierTable />
        </div>
      </section>

      <MemoryFolder />
    </>
  )
}
