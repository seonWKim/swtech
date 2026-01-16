import { motion } from 'framer-motion';
import { Container } from '../components/common';

export function RefundPage() {
  return (
    <main className="flex-1 py-12 md:py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[800px]"
        >
          <h1 className="text-3xl font-bold text-secondary mb-2">환불 및 청약철회 정책</h1>
          <p className="text-slate-500 text-sm mb-10 pb-6 border-b border-gray-200">
            최종 수정일: 2025년 1월 1일
          </p>

          <div className="prose prose-slate max-w-none">
            <p className="text-[15px] leading-relaxed mb-4">
              에스더블유테크(이하 "회사")는 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관련 법령에 따라 고객의 권익을 보호하고자 다음과 같이 환불 및 청약철회 정책을 운영합니다.
            </p>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제1조 (적용 범위)</h2>
            <p className="text-[15px] leading-relaxed mb-4">
              본 정책은 회사가 제공하는 소프트웨어 개발 서비스 및 관련 용역에 적용됩니다.
            </p>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제2조 (청약철회의 기준)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li>고객은 계약 체결일로부터 7일 이내에 청약을 철회할 수 있습니다. 다만, 다음 각 호의 경우에는 청약철회가 제한될 수 있습니다.
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>고객의 요청에 따라 개별적으로 제작되는 용역의 경우</li>
                  <li>용역 제공이 이미 시작된 경우</li>
                  <li>시간의 경과로 재판매가 곤란할 정도로 용역의 가치가 현저히 감소한 경우</li>
                </ul>
              </li>
              <li>제1항 단서에 해당하는 경우에도 회사가 사전에 청약철회 제한에 관한 사실을 고객이 쉽게 알 수 있도록 명시하지 않은 경우에는 청약철회가 가능합니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제3조 (환불 절차)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li><strong>환불 신청</strong>: 환불을 원하시는 고객은 이메일(seonwoo960000.kim@gmail.com)을 통해 환불 신청을 하실 수 있습니다.</li>
              <li><strong>환불 검토</strong>: 회사는 환불 신청을 접수한 날로부터 3영업일 이내에 환불 가능 여부를 검토하여 고객에게 통지합니다.</li>
              <li><strong>환불 처리</strong>: 환불이 승인된 경우, 회사는 환불 승인일로부터 3영업일 이내에 환불을 처리합니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제4조 (환불 금액 산정)</h2>
            <h3 className="text-lg font-semibold text-secondary mt-6 mb-3">1. 서비스 시작 전 청약철회</h3>
            <p className="text-[15px] leading-relaxed mb-4">계약금 전액을 환불합니다.</p>

            <h3 className="text-lg font-semibold text-secondary mt-6 mb-3">2. 서비스 진행 중 청약철회</h3>
            <p className="text-[15px] leading-relaxed mb-4">다음 기준에 따라 환불 금액을 산정합니다.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm my-6">
                <thead>
                  <tr>
                    <th className="bg-slate-50 border border-gray-200 px-4 py-3 text-left font-semibold">진행 단계</th>
                    <th className="bg-slate-50 border border-gray-200 px-4 py-3 text-left font-semibold">환불 비율</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">기획/분석 단계 (진행률 25% 미만)</td>
                    <td className="border border-gray-200 px-4 py-3">계약금의 75%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">설계 단계 (진행률 25% ~ 50% 미만)</td>
                    <td className="border border-gray-200 px-4 py-3">계약금의 50%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">개발 단계 (진행률 50% ~ 75% 미만)</td>
                    <td className="border border-gray-200 px-4 py-3">계약금의 25%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">테스트/완료 단계 (진행률 75% 이상)</td>
                    <td className="border border-gray-200 px-4 py-3">환불 불가</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-relaxed mb-4">* 진행률은 개별 계약에서 정한 마일스톤 및 산출물 기준으로 산정합니다.</p>

            <h3 className="text-lg font-semibold text-secondary mt-6 mb-3">3. 회사 귀책 사유로 인한 계약 해지</h3>
            <p className="text-[15px] leading-relaxed mb-4">
              회사의 귀책 사유로 인해 서비스를 제공할 수 없게 된 경우, 이미 지급받은 대금 전액을 환불하며, 고객에게 발생한 손해가 있는 경우 이를 배상합니다.
            </p>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제5조 (환불 방법)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li>환불은 고객이 결제한 동일한 수단으로 처리함을 원칙으로 합니다.</li>
              <li>신용카드 결제의 경우 카드사 정책에 따라 환불 처리 기간이 달라질 수 있습니다.</li>
              <li>계좌이체의 경우 고객이 지정한 계좌로 환불 금액을 입금합니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제6조 (환불 시 공제 사항)</h2>
            <p className="text-[15px] leading-relaxed mb-4">다음 비용은 환불 금액에서 공제될 수 있습니다.</p>
            <ul className="list-disc pl-6 space-y-1 text-[15px]">
              <li>이미 제공된 서비스에 대한 대가</li>
              <li>제3자에게 지급된 비용 (서버 비용, 라이선스 비용 등)</li>
              <li>환불 처리에 소요되는 금융 수수료</li>
            </ul>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제7조 (분쟁 해결)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li>환불과 관련하여 회사와 고객 간에 분쟁이 발생한 경우, 양 당사자는 성실히 협의하여 해결합니다.</li>
              <li>협의가 이루어지지 않는 경우, 「전자상거래 등에서의 소비자보호에 관한 법률」에 따른 분쟁해결 절차를 따릅니다.</li>
              <li>고객은 한국소비자원(www.kca.go.kr, 1372) 또는 전자거래분쟁조정위원회(www.ecmc.or.kr)에 분쟁조정을 신청할 수 있습니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제8조 (기타)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li>본 정책에서 정하지 않은 사항은 「전자상거래 등에서의 소비자보호에 관한 법률」 및 관련 법령에 따릅니다.</li>
              <li>개별 계약에서 본 정책과 다르게 정한 경우, 개별 계약의 내용이 우선 적용됩니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">부칙</h2>
            <p className="text-[15px] leading-relaxed">본 정책은 2025년 1월 1일부터 시행합니다.</p>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}
