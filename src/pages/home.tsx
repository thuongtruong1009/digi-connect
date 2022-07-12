import CIntroBanner from '~/components/home/CIntroBanner.tsx';
import CCompany from '~/components/home/CCompany.tsx';
import CBrowseJob from '~/components/home/CBrowseJob.tsx';
import CFeatureJob from '~/components/home/CFeatureJob.tsx';
import CSponsor from '~/components/home/CSponsor.tsx';

const Home = () => {
  return (
    <section>
      <CIntroBanner />
      <CCompany />
      <CBrowseJob />
      <CFeatureJob />
      <CSponsor />
    </section>
  );
};

export default Home;
