import { motion } from 'framer-motion';
import { Container } from '../components/common';

export function TermsPage() {
  return (
    <main className="flex-1 py-12 md:py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[800px]"
        >
          <h1 className="text-3xl font-bold text-secondary mb-2">이용약관</h1>
          <p className="text-slate-500 text-sm mb-10 pb-6 border-b border-gray-200">
            최종 수정일: 2025년 1월 1일
          </p>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제1조 (목적)</h2>
            <p className="text-[15px] leading-relaxed mb-4">
              본 약관은 에스더블유테크(이하 "회사")가 제공하는 소프트웨어 개발 및 관련 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제2조 (정의)</h2>
            <p className="text-[15px] leading-relaxed mb-4">본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li>"서비스"란 회사가 제공하는 응용 소프트웨어 개발, 웹/모바일 애플리케이션 개발, 시스템 유지보수 등 일체의 서비스를 말합니다.</li>
              <li>"이용자"란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 고객을 말합니다.</li>
              <li>"계약"이란 회사와 이용자 간에 서비스 제공에 관하여 체결하는 계약을 말합니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제3조 (약관의 효력 및 변경)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li>본 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.</li>
              <li>회사는 필요한 경우 관련 법령을 위반하지 않는 범위에서 본 약관을 변경할 수 있으며, 변경된 약관은 회사 웹사이트에 공지함으로써 효력이 발생합니다.</li>
              <li>이용자가 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단할 수 있습니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제4조 (서비스의 제공)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li>회사는 이용자와 별도의 계약을 체결하여 서비스를 제공합니다.</li>
              <li>서비스의 구체적인 내용, 범위, 비용 등은 개별 계약에서 정합니다.</li>
              <li>회사는 서비스 제공을 위해 필요한 경우 서비스의 내용을 변경할 수 있으며, 이 경우 사전에 이용자에게 통지합니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제5조 (계약의 성립)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li>서비스 이용 계약은 이용자의 서비스 신청과 회사의 승낙으로 성립합니다.</li>
              <li>회사는 다음 각 호에 해당하는 경우 서비스 제공을 거절할 수 있습니다.
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>이용자가 허위 정보를 제공한 경우</li>
                  <li>관련 법령에 위반되는 경우</li>
                  <li>회사의 정상적인 서비스 제공에 지장을 초래하는 경우</li>
                </ul>
              </li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제6조 (이용자의 의무)</h2>
            <p className="text-[15px] leading-relaxed mb-4">이용자는 다음 각 호의 행위를 하여서는 안 됩니다.</p>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li>서비스 신청 또는 이용 시 허위 내용을 기재하는 행위</li>
              <li>회사의 지식재산권 및 기타 권리를 침해하는 행위</li>
              <li>회사의 동의 없이 서비스 결과물을 제3자에게 제공하거나 공개하는 행위</li>
              <li>관련 법령 및 본 약관을 위반하는 행위</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제7조 (회사의 의무)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li>회사는 관련 법령과 본 약관이 금지하는 행위를 하지 않으며, 계속적이고 안정적으로 서비스를 제공하기 위하여 최선을 다합니다.</li>
              <li>회사는 이용자의 개인정보를 보호하기 위해 개인정보처리방침을 수립하고 이를 준수합니다.</li>
              <li>회사는 서비스 제공과 관련하여 이용자로부터 제기된 의견이나 불만이 정당하다고 인정되는 경우 이를 처리하여야 합니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제8조 (지식재산권)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li>서비스 결과물에 대한 지식재산권의 귀속은 개별 계약에서 정하는 바에 따릅니다.</li>
              <li>별도의 약정이 없는 경우, 서비스 제공 과정에서 회사가 독자적으로 개발한 기술 및 노하우에 대한 권리는 회사에 귀속됩니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제9조 (서비스의 중단)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li>회사는 시스템 점검, 장애, 천재지변 등 불가피한 사유가 발생한 경우 서비스 제공을 일시적으로 중단할 수 있습니다.</li>
              <li>회사는 서비스 중단 시 가능한 한 사전에 이용자에게 통지합니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제10조 (손해배상)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li>회사 또는 이용자가 본 약관의 규정을 위반하여 상대방에게 손해를 입힌 경우, 그 손해를 배상할 책임이 있습니다.</li>
              <li>회사는 무료로 제공하는 서비스의 이용과 관련하여 이용자에게 발생한 손해에 대해서는 책임을 지지 않습니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제11조 (면책조항)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li>회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력적인 사유로 인해 서비스를 제공할 수 없는 경우 책임이 면제됩니다.</li>
              <li>회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임을 지지 않습니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제12조 (분쟁해결)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li>본 약관 및 서비스 이용과 관련하여 회사와 이용자 간에 분쟁이 발생한 경우, 양 당사자는 분쟁의 해결을 위해 성실히 협의합니다.</li>
              <li>협의로 해결되지 않는 경우, 관할 법원은 회사 소재지를 관할하는 법원으로 합니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제13조 (기타)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li>본 약관에서 정하지 않은 사항과 본 약관의 해석에 관하여는 관련 법령 및 상관례에 따릅니다.</li>
              <li>본 약관의 일부 조항이 무효가 되더라도 나머지 조항의 효력에는 영향을 미치지 않습니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">부칙</h2>
            <p className="text-[15px] leading-relaxed">본 약관은 2025년 1월 1일부터 시행합니다.</p>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}
