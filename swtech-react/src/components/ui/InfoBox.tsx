import { motion } from 'framer-motion';

interface InfoBoxProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function InfoBox({ title, children, className = '' }: InfoBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-slate-50 border border-gray-200 rounded-xl p-8 ${className}`}
    >
      <h3 className="text-xl font-semibold text-secondary mb-4">{title}</h3>
      {children}
    </motion.div>
  );
}
