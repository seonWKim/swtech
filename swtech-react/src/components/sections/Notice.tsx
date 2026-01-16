import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export function Notice() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-400 rounded-xl p-6 md:p-8 flex items-start gap-4 mb-12"
    >
      <div className="flex-shrink-0">
        <AlertCircle className="w-6 h-6 text-amber-600" />
      </div>
      <div>
        <h3 className="text-amber-800 text-base font-semibold mb-1">서비스 준비 중</h3>
        <p className="text-amber-700 text-sm">
          현재 서비스 오픈을 준비하고 있습니다. 문의사항은 이메일로 연락 부탁드립니다.
        </p>
      </div>
    </motion.section>
  );
}
