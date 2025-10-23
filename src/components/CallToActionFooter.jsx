import { motion } from 'framer-motion';

export default function CallToActionFooter() {
  return (
    <div className="bg-black text-white">
      {/* CTA */}
      <section id="preorder" className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_120%,rgba(255,255,255,0.15),rgba(0,0,0,0))]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl font-semibold tracking-tight md:text-5xl"
          >
            Pre‑Order iPhone Nova
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            className="mx-auto mt-4 max-w-2xl text-neutral-300 md:text-lg"
          >
            Be the first to experience the future. Limited launch quantities available.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a
              href="#"
              className="group relative inline-flex items-center justify-center rounded-full bg-white/90 px-10 py-4 text-base font-semibold text-black transition duration-300 hover:bg-white"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,.7), 0 20px 40px rgba(255,255,255,.15)' }}
            >
              <span className="relative z-10">Pre‑Order Now</span>
              <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-10 py-4 text-base font-semibold text-white transition hover:border-white/60"
            >
              Learn more
            </a>
          </motion.div>
          <p className="mt-4 text-xs text-neutral-500">Free delivery. Free returns. Financing available.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/80 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Apple Inc. (Inspired). All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Sales and Refunds</a>
            <a href="#" className="hover:text-white">Legal</a>
            <a href="#" className="hover:text-white">Site Map</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
