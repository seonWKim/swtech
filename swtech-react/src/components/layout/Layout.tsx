import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  const location = useLocation();
  const isLegalPage = ['/terms', '/privacy', '/refund'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Header variant={isLegalPage ? 'legal' : 'main'} />
      <Outlet />
      <Footer />
    </div>
  );
}
