import { Link, useLocation } from 'react-router-dom';
import { Container } from '../common/Container';
import { companyInfo } from '../../constants/companyInfo';
import { footerServiceLinks, footerLegalLinks } from '../../constants/navigation';

export function Footer() {
  const location = useLocation();

  const handleLinkClick = (href: string, isHash: boolean | undefined) => {
    if (isHash && location.pathname === '/') {
      const elementId = href.replace('/#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-secondary text-slate-400 py-12 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">{companyInfo.name.korean}</h3>
            <p className="text-slate-500 text-sm leading-loose">
              상호명: {companyInfo.name.korean} ({companyInfo.name.english})<br />
              대표자: {companyInfo.representative}<br />
              사업자등록번호: {companyInfo.businessNumber}<br />
              주소: {companyInfo.address.full}<br />
              이메일: {companyInfo.contact.email}
            </p>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">서비스</h4>
            <ul className="space-y-2">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={(e) => {
                      if (link.isHash && location.pathname === '/') {
                        e.preventDefault();
                        handleLinkClick(link.href, link.isHash);
                      }
                    }}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">법적 고지</h4>
            <ul className="space-y-2">
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-6 border-t border-slate-700 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {companyInfo.copyright.year} {companyInfo.copyright.text}
          </p>
        </div>
      </Container>
    </footer>
  );
}
