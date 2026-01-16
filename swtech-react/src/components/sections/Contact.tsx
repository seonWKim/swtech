import { motion } from 'framer-motion';
import { InfoBox } from '../ui/InfoBox';
import { companyInfo } from '../../constants/companyInfo';

export function Contact() {
  return (
    <section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">문의하기</h2>
      </motion.div>

      <InfoBox title="연락처 정보">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-slate-600">
            <strong className="min-w-[80px] text-slate-500 font-medium">이메일</strong>
            <a
              href={`mailto:${companyInfo.contact.email}`}
              className="text-primary hover:text-primary-dark transition-colors"
            >
              {companyInfo.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-3 text-slate-600">
            <strong className="min-w-[80px] text-slate-500 font-medium">주소</strong>
            <span>{companyInfo.address.full}</span>
          </div>
        </div>
      </InfoBox>
    </section>
  );
}
