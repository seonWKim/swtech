import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'full' | 'icon';
  className?: string;
  linkTo?: string;
}

export function Logo({ variant = 'full', className = '', linkTo = '/' }: LogoProps) {
  const logoContent = variant === 'icon' ? (
    <svg viewBox="0 0 32 32" className={`h-8 w-8 ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="28" height="20" rx="4" fill="#1a56db" />
      <path d="M10 12L6 16L10 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 12L26 16L22 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="15" y1="20" x2="17" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ) : (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10L2 16L8 22" stroke="#1a56db" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 10L30 16L24 22" stroke="#1a56db" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="14" y1="22" x2="18" y2="10" stroke="#1a56db" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span className="text-xl font-bold">
        <span className="text-primary">SW</span>
        <span className="text-secondary"> Systems</span>
      </span>
    </div>
  );

  return (
    <Link to={linkTo} className="hover:opacity-80 transition-opacity">
      {logoContent}
    </Link>
  );
}
