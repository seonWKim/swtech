export interface NavLink {
  label: string;
  href: string;
  isHash?: boolean;
}

export const mainNavLinks: NavLink[] = [
  { label: '서비스', href: '/#services', isHash: true },
  { label: '회사소개', href: '/#about', isHash: true },
  { label: '문의', href: '/#contact', isHash: true },
];

export const legalNavLinks: NavLink[] = [
  { label: '홈', href: '/' },
  { label: '서비스', href: '/#services', isHash: true },
  { label: '문의', href: '/#contact', isHash: true },
];

export const footerServiceLinks: NavLink[] = [
  { label: '서비스 안내', href: '/#services', isHash: true },
  { label: '회사 소개', href: '/#about', isHash: true },
  { label: '문의하기', href: '/#contact', isHash: true },
];

export const footerLegalLinks: NavLink[] = [
  { label: '이용약관', href: '/terms' },
  { label: '개인정보처리방침', href: '/privacy' },
  { label: '환불정책', href: '/refund' },
];
