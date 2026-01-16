import { motion } from 'framer-motion';

export function Hero() {
  return (
    <header className="bg-gradient-to-br from-secondary to-slate-800 text-white py-16 md:py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-[42px] font-extrabold mb-4 tracking-tight"
        >
          SW Systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 mb-8"
        >
          신뢰할 수 있는 소프트웨어 개발 파트너
        </motion.p>

        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm text-slate-200"
        >
          응용 소프트웨어 개발 및 공급
        </motion.span>
      </motion.div>
    </header>
  );
}
