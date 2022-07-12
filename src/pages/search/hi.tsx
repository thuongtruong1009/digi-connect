import { useLocation, useNavigate } from 'react-router-dom';
import '~/styles/components/dynamic/_default.scss';

const Hi = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleRouter = (router: string) =>
    router.replace('/search/', '').replace('%20', ' ');
  const returnHome = () => navigate('/');

  return (
    <section className="default_component">
      <h1>This is result of {handleRouter(location.pathname)}</h1>
      <button onClick={returnHome}>Back!</button>
    </section>
  );
};

export default Hi;
