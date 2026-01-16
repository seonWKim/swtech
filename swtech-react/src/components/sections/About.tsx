import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">회사 소개</h2>
        <p className="text-slate-600 mb-4">
          에스더블유테크(SW Systems)는 고객의 비즈니스 성공을 위한 소프트웨어 솔루션을 제공하는 전문 기업입니다.
        </p>
        <p className="text-slate-600">
          풍부한 개발 경험과 최신 기술력을 바탕으로, 고객 맞춤형 소프트웨어 개발부터 시스템 컨설팅까지 종합적인 IT 서비스를 제공합니다.
        </p>
      </motion.div>
    </section>
  );
}
