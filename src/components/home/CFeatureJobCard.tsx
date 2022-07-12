type Props = {
  img: string;
  name: string;
  desc: string;
  type: string;
};

const CFeatureJobCard = ({ img, name, desc, type }: Props) => {
  return (
    <div className="job_cell">
      <div>
        <img src={img} alt="img_1" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{desc}</p>
        <div>
          <p title={type}>{type}</p>
          <img src="/home/feature_job/arrow.svg" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default CFeatureJobCard;
