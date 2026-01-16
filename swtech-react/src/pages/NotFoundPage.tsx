import { motion } from 'framer-motion';
import { Container, Button } from '../components/common';

export function NotFoundPage() {
  return (
    <main className="flex-1 py-16 md:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[80px] md:text-[120px] font-extrabold text-gray-200 leading-none mb-6"
          >
            404
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-[28px] font-bold text-secondary mb-4"
          >
            페이지를 찾을 수 없습니다
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-500 mb-8"
          >
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button href="/">홈으로 돌아가기</Button>
          </motion.div>
        </motion.div>
      </Container>
    </main>
  );
}
