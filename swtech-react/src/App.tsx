import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage, TermsPage, PrivacyPage, RefundPage, NotFoundPage } from './pages';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
