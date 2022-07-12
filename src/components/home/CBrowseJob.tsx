import React from 'react';
import CBrowseJobCard from './CBrowseJobCard';

interface BrowseCardInfor {
  id: string;
  name: string;
  quantitiesPosition: number;
}

const CBrowseJob: React.FC<BrowseCardInfor> = () => {
  const browseJobList = [
    {
      id: 1,
      name: 'Create Design',
      quantity: 14,
    },
    {
      id: 2,
      name: 'Bussiness Management',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Admin',
      quantity: 4,
    },
    {
      id: 4,
      name: 'Software & Web Development',
      quantity: 5,
    },
    {
      id: 5,
      name: 'Database Administration',
      quantity: 8,
    },
    {
      id: 6,
      name: 'Advertising',
      quantity: 4,
    },
    {
      id: 7,
      name: 'Graphic Design',
      quantity: 2,
    },
    {
      id: 8,
      name: 'Electronics Techinican',
      quantity: 3,
    },
    {
      id: 9,
      name: 'Maketing',
      quantity: 2,
    },
    {
      id: 10,
      name: 'HR',
      quantity: 1,
    },
  ];
  return (
    <section className="browse_job" id="Job">
      <div className="browse_job-title">
        <h1>
          Browse <span>Jobs</span>
        </h1>
      </div>
      <div className="browse_job_grid">
        {browseJobList.map((item) => {
          return (
            <CBrowseJobCard
              key={item.id}
              name={item.name}
              quantitiesPosition={item.quantity}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CBrowseJob;
