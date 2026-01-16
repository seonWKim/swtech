import { motion } from 'framer-motion';

interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    company: '국내 대형 핀테크 기업',
    role: 'Software Engineer',
    period: '2년+',
    highlights: [
      '모바일/웹 트레이딩 시스템 핵심 기능 개발 및 성능 최적화',
      '대용량 트래픽(40K+ TPS) 처리를 위한 게이트웨이 애플리케이션 설계 및 운영',
      '실시간 검색, 랭킹, 스크리닝 등 디스커버리 기능 구축',
    ],
  },
  {
    company: '글로벌 IT 기업',
    role: 'Software Engineer',
    period: '2년',
    highlights: [
      '결제 및 정산 플랫폼 백오피스 시스템 개발',
      'Kubernetes 기반 클라우드 네이티브 환경 구축 및 운영',
      'Java, MySQL, Elasticsearch 기반 마이크로서비스 개발',
    ],
  },
];

interface OpenSourceProject {
  name: string;
  description: string;
}

const openSourceProjects: OpenSourceProject[] = [
  {
    name: 'Database',
    description: 'Rust 기반 데이터베이스 핵심 로직 및 JDBC 드라이버 개발 기여',
  },
  {
    name: 'Server Framework',
    description: '비동기 Java 서버 프레임워크 기능 구현 및 개선 기여',
  },
  {
    name: 'Integration Library',
    description: 'Spring Boot와 Actor 모델 프레임워크 통합 라이브러리 설계 및 개발',
  },
];

export function About() {
  return (
    <section id="about" className="mb-12 md:mb-16">
      {/* Company Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="section-title">회사 소개</h2>
        <p className="text-slate-600 mb-4">
          에스더블유테크(SW Systems)는 고객의 비즈니스 성공을 위한 소프트웨어 솔루션을 제공하는 전문 기업입니다.
        </p>
        <p className="text-slate-600">
          풍부한 개발 경험과 최신 기술력을 바탕으로, 고객 맞춤형 소프트웨어 개발부터 시스템 컨설팅까지 종합적인 IT 서비스를 제공합니다.
        </p>
      </motion.div>

      {/* Professional Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12"
      >
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          대표 경력사항
        </h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-0 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow hidden md:block" />

                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="font-semibold text-slate-800">{exp.company}</h4>
                      <p className="text-blue-600 font-medium">{exp.role}</p>
                    </div>
                    <div className="text-sm text-slate-500">
                      <p>{exp.period}</p>
                      {exp.location && <p>{exp.location}</p>}
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-blue-400 mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Open Source Contributions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </span>
          오픈소스 기여
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {openSourceProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-4 hover:border-green-300 transition-colors"
            >
              <h4 className="font-semibold text-slate-800 mb-2">{project.name}</h4>
              <p className="text-sm text-slate-600">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
