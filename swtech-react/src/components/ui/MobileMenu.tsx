import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import type { NavLink } from '../../constants/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const location = useLocation();

  const handleLinkClick = (href: string, isHash?: boolean) => {
    onClose();

    if (isHash && location.pathname === '/') {
      const elementId = href.replace('/#', '');
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="text-lg font-bold text-secondary">메뉴</span>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="메뉴 닫기"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={() => handleLinkClick(link.href, link.isHash)}
                      className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
