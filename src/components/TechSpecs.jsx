import { motion } from 'framer-motion';

const specs = [
  { label: 'Finish', value: 'Space Gray, Silver, Obsidian Black' },
  { label: 'Material', value: 'Aerospace‑grade titanium with ceramic shield front' },
  { label: 'Display', value: '6.7‑inch NovaMotion XDR, 1–120Hz, 2,500 nits peak HDR' },
  { label: 'Chip', value: 'A1 Fusion Pro, 3nm, 16‑core Neural Engine (60 TOPS)' },
  { label: 'Camera', value: '50MP main, 12MP ultra‑wide, 12MP 6x periscope telephoto' },
  { label: 'Battery', value: 'All‑day battery, 30W fast charge, MagSafe 2' },
  { label: 'Security', value: 'Face ID with Neural Depth Mapping' },
  { label: 'Connectivity', value: '5G, Wi‑Fi 7, Ultra Wideband 2' },
  { label: 'Water Resistance', value: 'IP68 (6 meters up to 30 minutes)' },
  { label: 'Capacity', value: '256GB, 512GB, 1TB' },
];

export default function TechSpecs() {
  return (
    <section className="bg-black py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8 text-4xl font-semibold tracking-tight md:text-5xl"
        >
          Tech Specs
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {specs.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.03 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">{s.label}</p>
              <p className="mt-2 text-xl font-medium tracking-tight text-neutral-100">{s.value}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-neutral-500">
          Typography is set in a clean, modern sans-serif for maximum readability and precision. Actual features and specifications may vary by region and configuration.
        </p>
      </div>
    </section>
  );
}
