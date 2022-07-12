import '~/styles/main.scss';
import CNavigation from '~/components/CNavigation.tsx';
import Home from '~/pages/home.tsx';
import Footer from '~/components/CFooter.tsx';

function App() {
  return (
    <main>
      <CNavigation />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
