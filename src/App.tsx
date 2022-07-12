import { Routes, Route } from 'react-router-dom';
import '~/styles/main.scss';
import CNavigation from '~/components/CNavigation.tsx';
import Home from '~/pages/home.tsx';
import Hi from '~/pages/search/hi.tsx';
import Footer from '~/components/CFooter.tsx';

function App() {
  return (
    <main>
      <CNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Hi />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
