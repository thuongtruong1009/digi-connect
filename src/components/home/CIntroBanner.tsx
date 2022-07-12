import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CIntroBanner = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name) {
      navigate(`../search/${name}`, { replace: true });
    }
  };
  return (
    <section className="intro_banner" id="Enterprise">
      <div className="intro_title">
        <h1>One milion success stories.</h1>
        <h1>Start your today.</h1>
      </div>
      <div className="intro_search">
        <p className="intro_search-label">Keyword/ Job Title</p>
        <form>
          <input
            type="text"
            placeholder="Enter Skills or jobs title"
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleSubmit}>Search jobs</button>
        </form>
      </div>
    </section>
  );
};

export default CIntroBanner;
