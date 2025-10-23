import { motion } from 'framer-motion';

const features = [
  {
    title: 'Design',
    subtitle: 'Sculpted in Space Gray',
    desc: 'Aerospace‑grade titanium chassis with micro‑polished edges. Thin, light, and impossibly strong.',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Display',
    subtitle: 'NovaMotion XDR',
    desc: '6.7‑inch adaptive 1–120Hz LTPO panel with 2,500 nits peak HDR. Colors that feel alive.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Camera',
    subtitle: 'Quantum Photonics',
    desc: '50MP quad‑pixel main with periscope 6x, nano‑binned low‑light, and cinematic stabilization.',
    image:
      'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Performance',
    subtitle: 'A1 Fusion Pro',
    desc: '3nm architecture with neural cores pushing 60 TOPS. All‑day battery with adaptive efficiency.',
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function Highlights() {
  return (
    <section className="bg-black py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`grid items-center gap-10 py-16 md:grid-cols-2 ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">{f.title}</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">{f.subtitle}</h3>
              <p className="mt-4 text-neutral-300 md:text-lg">{f.desc}</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
              <img
                src={f.image}
                alt={`${f.title} preview`}
                className="h-[360px] w-full object-cover md:h-[420px]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
