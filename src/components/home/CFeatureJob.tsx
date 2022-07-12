import React from 'react';
import CFeatureJobCard from './CFeatureJobCard';

const featureJobList = [
  {
    img: '/home/feature_job/1.png',
    name: 'User Experience Design',
    desc: 'Lionflame - Vietnam',
    type: 'Full time',
  },
  {
    img: '/home/feature_job/2.png',
    name: 'Art Director',
    desc: 'BLOOM - Singapore',
    type: 'Part time',
  },
  {
    img: '/home/feature_job/3.png',
    name: 'SEO Expert',
    desc: 'Mia Studios - Singapores',
    type: 'Freelance',
  },
  {
    img: '/home/feature_job/4.png',
    name: 'UI/UX Design',
    desc: 'Lionflame - Vietnam',
    type: 'Full time',
  },
  {
    img: '/home/feature_job/5.png',
    name: 'SEO Expert',
    desc: 'Mia Studios - Singapores',
    type: 'Freelance',
  },
  {
    img: '/home/feature_job/6.png',
    name: 'Art Director',
    desc: 'BLOOM - Singapore',
    type: 'Internship',
  },
  {
    img: '/home/feature_job/7.png',
    name: 'Art Director',
    desc: 'BLOOM - Singapore',
    type: 'Part time',
  },
  {
    img: '/home/feature_job/8.png',
    name: 'Project Manager',
    desc: 'Lionflame - Vietnam',
    type: 'Full time',
  },
];

const CFeatureJob = () => {
  return (
    <section className="feature_job">
      <div>
        <h1>
          Feature <span>Jobs</span>
        </h1>
      </div>
      <div className="feature_job-grid">
        {featureJobList.map((item, index) => {
          return (
            <CFeatureJobCard
              key={index}
              img={item.img}
              name={item.name}
              desc={item.desc}
              type={item.type}
            />
          );
        })}

        <div className="job_cell">
          <h2>
            Explore more <span>1565+</span> job posted
          </h2>
          <div>
            <img src="/home/feature_job/arrow.svg" alt="last_cell" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CFeatureJob;
