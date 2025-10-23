import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const yParallax = useTransform(scrollYProgress, [0, 1], ['0vh', '20vh']);
  const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scalePhone = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.18),rgba(0,0,0,0)_50%)]" />

      <motion.div style={{ y: yParallax, scale: scalePhone }} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/kCw43Qrbdrk2b7a1/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ opacity: opacityText }}
          className="text-5xl font-semibold tracking-tight md:text-7xl"
        >
          iPhone Nova
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          style={{ opacity: opacityText }}
          className="mt-4 max-w-2xl text-lg text-neutral-300 md:text-2xl"
        >
          A leap into the future with a display that breathes, a camera that sees beyond, and performance that redefines speed.
        </motion.p>

        <motion.a
          href="#preorder"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
          style={{ opacity: opacityText }}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white/90 px-8 py-3 text-sm font-medium text-black outline-none transition [box-shadow:inset_0_1px_0_rgba(255,255,255,.6),0_10px_30px_rgba(255,255,255,.15)] hover:bg-white focus-visible:ring-2 focus-visible:ring-white/60"
        >
          Watch the film
        </motion.a>
      </div>
    </section>
  );
}
