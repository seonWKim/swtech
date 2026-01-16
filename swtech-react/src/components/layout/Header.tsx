import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Logo } from '../common/Logo';
import { Container } from '../common/Container';
import { MobileMenu } from '../ui/MobileMenu';
import { mainNavLinks, legalNavLinks } from '../../constants/navigation';
import type { NavLink } from '../../constants/navigation';

interface HeaderProps {
  variant?: 'main' | 'legal';
}

export function Header({ variant = 'main' }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const links: NavLink[] = variant === 'main' ? mainNavLinks : legalNavLinks;

  const handleNavClick = (href: string, isHash?: boolean) => {
    if (isHash && location.pathname === '/') {
      const elementId = href.replace('/#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <Container className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={(e) => {
                    if (link.isHash && location.pathname === '/') {
                      e.preventDefault();
                      handleNavClick(link.href, link.isHash);
                    }
                  }}
                  className="text-slate-600 text-[15px] font-medium py-2 border-b-2 border-transparent hover:text-primary hover:border-primary transition-all duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="메뉴 열기"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </Container>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={links}
      />
    </>
  );
}
