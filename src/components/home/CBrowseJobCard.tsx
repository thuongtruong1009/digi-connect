import React from 'react';

interface BrowseCardProps {
  name: string;
  quantitiesPosition: number;
}

const CBrowseJobCard: React.FC<BrowseCardProps> = ({
  name,
  quantitiesPosition,
}: BrowseCardProps) => {
  return (
    <div>
      <p className="job_type">{name}</p>
      <p className="job_slot">{quantitiesPosition} Position</p>
    </div>
  );
};

export default CBrowseJobCard;
