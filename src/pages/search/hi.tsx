import { useNavigate, useParams } from 'react-router-dom';
import '~/styles/components/dynamic/_default.scss';

const Hi = () => {
  const navigate = useNavigate();
  const { keyword } = useParams();

  const handleRouter = (router: string) =>
    router.replace(`/search/${keyword}`, '').replace('%20', ' ');

  const returnHome = () => navigate('/');

  return (
    <section className="default_component">
      {keyword && <h1>This is result of {handleRouter(keyword)}</h1>}
      <button onClick={returnHome}>Back!</button>
    </section>
  );
};

export default Hi;
