import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export function ServiceCard({ icon: Icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-white border border-gray-200 rounded-xl p-8 transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-3">{title}</h3>
      <p className="text-slate-500 text-[15px] leading-relaxed">{description}</p>
    </motion.div>
  );
}
