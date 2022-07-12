import React from 'react';

const CIntroBanner = () => {
  return (
    <section className="intro_banner" id="Enterprise">
      <div className="intro_title">
        <h1>One milion success stories.</h1>
        <h1>Start your today.</h1>
      </div>
      <div className="intro_search">
        <p className="intro_search-label">Keyword/ Job Title</p>
        <form>
          <input type="text" placeholder="Enter Skills or jobs title" />
          <button>Search jobs</button>
        </form>
      </div>
    </section>
  );
};

export default CIntroBanner;
