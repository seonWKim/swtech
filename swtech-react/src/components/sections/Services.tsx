import { motion } from 'framer-motion';
import { ServiceCard } from '../ui/ServiceCard';
import { services } from '../../constants/services';

export function Services() {
  return (
    <section id="services" className="mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">서비스 안내</h2>
        <p className="text-slate-600 mb-8">
          에스더블유테크는 다양한 소프트웨어 개발 서비스를 제공합니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
