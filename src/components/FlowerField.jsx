import { useEffect, useRef } from 'react'
import p5 from 'p5'

const palette = {
  rust: [184, 34, 56],
  blush: [255, 72, 146],
  coral: [255, 118, 72],
  gold: [255, 230, 36],
  butter: [255, 247, 110],
  sage: [104, 198, 76],
  cream: [255, 253, 240],
}

function randomChoice(p, values) {
  return values[Math.floor(p.random(values.length))]
}

export default function FlowerField() {
  const hostRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 }
    let shouldRedraw = false

    const sketch = (p) => {
      const blossoms = []
      const petals = []
      let lastTrailAt = 0

      const addTrailPetal = (x, y) => {
        petals.push({
          x: x + p.random(-8, 8),
          y: y + p.random(-8, 8),
          size: p.random(12, 22),
          vx: p.random(-0.45, 0.45),
          vy: p.random(-0.8, -0.2),
          drift: p.random(0.006, 0.018),
          rotation: p.random(-1.2, 1.2),
          vr: p.random(-0.03, 0.03),
          life: 1,
          color: randomChoice(p, [palette.blush, palette.coral, palette.gold, palette.butter, palette.cream]),
        })
      }

      const addBlossom = (x, y) => {
        blossoms.push({
          x,
          y,
          age: 0,
          maxAge: 110,
          size: p.random(32, 62),
          petals: Math.floor(p.random(6, 9)),
          rotation: p.random(-0.4, 0.4),
          color: randomChoice(p, [palette.blush, palette.coral, palette.gold, palette.butter]),
        })
      }

      const onPointerMove = (event) => {
        pointer.x = event.clientX
        pointer.y = event.clientY

        if (reduceMotion) {
          shouldRedraw = true
          return
        }

        const now = performance.now()
        if (now - lastTrailAt > 22) {
          addTrailPetal(pointer.x, pointer.y)
          lastTrailAt = now
        }
      }

      const onPointerDown = (event) => {
        pointer.x = event.clientX
        pointer.y = event.clientY
        addBlossom(pointer.x, pointer.y)
        for (let i = 0; i < 6; i += 1) {
          addTrailPetal(pointer.x, pointer.y)
        }
        shouldRedraw = true
      }

      const drawPetal = (x, y, width, height, rotation, color, alpha) => {
        p.push()
        p.translate(x, y)
        p.rotate(rotation)
        p.noStroke()
        p.fill(color[0], color[1], color[2], alpha)
        p.ellipse(0, 0, width, height)
        p.pop()
      }

      const drawBlossom = (blossom) => {
        const progress = blossom.age / blossom.maxAge
        const open = p.sin(progress * p.PI)
        const radius = blossom.size * (0.45 + open * 0.9)
        const alpha = 0.92 - progress * 0.75

        p.push()
        p.translate(blossom.x, blossom.y)
        p.rotate(blossom.rotation + progress * 0.25)

        p.stroke(palette.sage[0], palette.sage[1], palette.sage[2], 110 * alpha)
        p.strokeWeight(1.1)
        p.line(0, radius * 0.24, 0, radius * 1.35)

        for (let i = 0; i < blossom.petals; i += 1) {
          const angle = (p.TWO_PI / blossom.petals) * i
          drawPetal(
            p.cos(angle) * radius * 0.48,
            p.sin(angle) * radius * 0.48,
            radius * 0.94,
            radius * 0.48,
            angle,
            blossom.color,
            245 * alpha
          )
        }

        p.noStroke()
        p.fill(palette.rust[0], palette.rust[1], palette.rust[2], 255 * alpha)
        p.circle(0, 0, radius * 0.28)
        p.pop()
      }

      const drawTrail = (petal) => {
        drawPetal(
          petal.x,
          petal.y,
          petal.size,
          petal.size * 0.55,
          petal.rotation,
          petal.color,
          225 * petal.life
        )
      }

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
        canvas.parent(host)
        canvas.elt.setAttribute('aria-hidden', 'true')
        p.pixelDensity(Math.min(window.devicePixelRatio || 1, 1.5))
        window.addEventListener('pointermove', onPointerMove, { passive: true })
        window.addEventListener('pointerdown', onPointerDown, { passive: true })
        if (reduceMotion) p.noLoop()
      }

      p.draw = () => {
        p.clear()

        for (let i = blossoms.length - 1; i >= 0; i -= 1) {
          const blossom = blossoms[i]
          blossom.age += 1
          drawBlossom(blossom)
          if (blossom.age >= blossom.maxAge) blossoms.splice(i, 1)
        }

        for (let i = petals.length - 1; i >= 0; i -= 1) {
          const petal = petals[i]
          petal.x += petal.vx
          petal.y += petal.vy
          petal.vx += p.sin((p.frameCount + i) * petal.drift) * 0.004
          petal.vy += 0.01
          petal.rotation += petal.vr
          petal.life *= 0.972
          drawTrail(petal)
          if (petal.life < 0.04) petals.splice(i, 1)
        }

        if (reduceMotion && shouldRedraw) {
          shouldRedraw = false
          p.redraw()
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
        shouldRedraw = true
        if (reduceMotion) p.redraw()
      }

      p.remove = ((originalRemove) => () => {
        window.removeEventListener('pointermove', onPointerMove)
        window.removeEventListener('pointerdown', onPointerDown)
        originalRemove.call(p)
      })(p.remove)
    }

    const instance = new p5(sketch)

    return () => {
      instance.remove()
    }
  }, [])

  return <div ref={hostRef} className="flower-field" />
}
