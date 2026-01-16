import { motion } from 'framer-motion';
import { Container } from '../components/common';

export function PrivacyPage() {
  return (
    <main className="flex-1 py-12 md:py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[800px]"
        >
          <h1 className="text-3xl font-bold text-secondary mb-2">개인정보처리방침</h1>
          <p className="text-slate-500 text-sm mb-10 pb-6 border-b border-gray-200">
            최종 수정일: 2025년 1월 1일
          </p>

          <div className="prose prose-slate max-w-none">
            <p className="text-[15px] leading-relaxed mb-4">
              에스더블유테크(이하 "회사")는 「개인정보 보호법」에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
            </p>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제1조 (개인정보의 처리 목적)</h2>
            <p className="text-[15px] leading-relaxed mb-4">
              회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li><strong>서비스 제공에 관한 계약 이행</strong>: 서비스 제공, 계약서 발송, 콘텐츠 제공, 맞춤 서비스 제공, 본인인증</li>
              <li><strong>고객 관리</strong>: 서비스 이용에 따른 본인확인, 개인식별, 고지사항 전달, 불만처리 등 민원처리, 분쟁 조정을 위한 기록 보존</li>
              <li><strong>마케팅 및 광고에 활용</strong>: 신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제2조 (개인정보의 처리 및 보유기간)</h2>
            <p className="text-[15px] leading-relaxed mb-4">
              회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
            <p className="text-[15px] leading-relaxed mb-4">각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm my-6">
                <thead>
                  <tr>
                    <th className="bg-slate-50 border border-gray-200 px-4 py-3 text-left font-semibold">처리 목적</th>
                    <th className="bg-slate-50 border border-gray-200 px-4 py-3 text-left font-semibold">보유 기간</th>
                    <th className="bg-slate-50 border border-gray-200 px-4 py-3 text-left font-semibold">근거 법령</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">계약 또는 청약철회 등에 관한 기록</td>
                    <td className="border border-gray-200 px-4 py-3">5년</td>
                    <td className="border border-gray-200 px-4 py-3">전자상거래 등에서의 소비자보호에 관한 법률</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">대금결제 및 재화 등의 공급에 관한 기록</td>
                    <td className="border border-gray-200 px-4 py-3">5년</td>
                    <td className="border border-gray-200 px-4 py-3">전자상거래 등에서의 소비자보호에 관한 법률</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">소비자의 불만 또는 분쟁처리에 관한 기록</td>
                    <td className="border border-gray-200 px-4 py-3">3년</td>
                    <td className="border border-gray-200 px-4 py-3">전자상거래 등에서의 소비자보호에 관한 법률</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">표시·광고에 관한 기록</td>
                    <td className="border border-gray-200 px-4 py-3">6개월</td>
                    <td className="border border-gray-200 px-4 py-3">전자상거래 등에서의 소비자보호에 관한 법률</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제3조 (처리하는 개인정보의 항목)</h2>
            <p className="text-[15px] leading-relaxed mb-4">회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
            <h3 className="text-lg font-semibold text-secondary mt-6 mb-3">1. 필수항목</h3>
            <ul className="list-disc pl-6 space-y-1 text-[15px]">
              <li>성명, 연락처(전화번호, 이메일 주소), 회사명</li>
            </ul>
            <h3 className="text-lg font-semibold text-secondary mt-6 mb-3">2. 선택항목</h3>
            <ul className="list-disc pl-6 space-y-1 text-[15px]">
              <li>서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보</li>
            </ul>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제4조 (개인정보의 제3자 제공)</h2>
            <p className="text-[15px] leading-relaxed mb-4">
              회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
            </p>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제5조 (개인정보처리의 위탁)</h2>
            <p className="text-[15px] leading-relaxed mb-4">
              회사는 원활한 개인정보 업무처리를 위하여 현재 개인정보 처리업무를 위탁하고 있지 않습니다. 향후 위탁 계약 체결 시 「개인정보 보호법」 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하겠습니다.
            </p>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제6조 (정보주체와 법정대리인의 권리·의무 및 그 행사방법)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li>정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.</li>
              <li>제1항에 따른 권리 행사는 회사에 대해 「개인정보 보호법」 시행령 제41조 제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.</li>
              <li>제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.</li>
              <li>개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한될 수 있습니다.</li>
              <li>개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제7조 (개인정보의 파기)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li>회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</li>
              <li>정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.</li>
              <li>개인정보 파기의 절차 및 방법은 다음과 같습니다.
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>파기절차</strong>: 회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.</li>
                  <li><strong>파기방법</strong>: 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</li>
                </ul>
              </li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제8조 (개인정보의 안전성 확보조치)</h2>
            <p className="text-[15px] leading-relaxed mb-4">회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li><strong>관리적 조치</strong>: 내부관리계획 수립·시행, 개인정보 취급 직원의 최소화 및 교육</li>
              <li><strong>기술적 조치</strong>: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
              <li><strong>물리적 조치</strong>: 전산실, 자료보관실 등의 접근통제</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제9조 (개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항)</h2>
            <p className="text-[15px] leading-relaxed mb-4">
              회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-[15px]">
              <li><strong>쿠키의 사용 목적</strong>: 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.</li>
              <li><strong>쿠키의 설치·운영 및 거부</strong>: 웹브라우저 상단의 도구 {'>'} 인터넷 옵션 {'>'} 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부할 수 있습니다.</li>
              <li>쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제10조 (개인정보 보호책임자)</h2>
            <p className="text-[15px] leading-relaxed mb-4">
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm my-6">
                <tbody>
                  <tr>
                    <th className="bg-slate-50 border border-gray-200 px-4 py-3 text-left font-semibold">구분</th>
                    <th className="bg-slate-50 border border-gray-200 px-4 py-3 text-left font-semibold">내용</th>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">성명</td>
                    <td className="border border-gray-200 px-4 py-3">김선우</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">직책</td>
                    <td className="border border-gray-200 px-4 py-3">대표</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">연락처</td>
                    <td className="border border-gray-200 px-4 py-3">seonwoo960000.kim@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제11조 (권익침해 구제방법)</h2>
            <p className="text-[15px] leading-relaxed mb-4">
              정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[15px]">
              <li>개인정보분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)</li>
              <li>개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)</li>
              <li>대검찰청: (국번없이) 1301 (www.spo.go.kr)</li>
              <li>경찰청: (국번없이) 182 (ecrm.cyber.go.kr)</li>
            </ul>

            <h2 className="text-xl font-semibold text-secondary mt-10 mb-4">제12조 (개인정보 처리방침 변경)</h2>
            <p className="text-[15px] leading-relaxed mb-4">
              이 개인정보처리방침은 2025년 1월 1일부터 적용됩니다. 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[15px]">
              <li>이전 개인정보 처리방침: 없음 (최초 시행)</li>
            </ul>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}
