import Gallery from '../components/Gallery';
import PageSelect from '../components/PageSelect';
import RoverSelect from '../components/RoverSelect';

const Latest = ({
  handleRoverSelect,
  handlePageSelect,
  data: { latest_photos: data },
}) => {
  return (
    <>
      <h1>Latest Mars Rover Pictures:</h1>
      <div className="input">
        <RoverSelect handleRoverSelect={handleRoverSelect} />
        <PageSelect handlePageSelect={handlePageSelect} />
        <Gallery data={data} />
      </div>
    </>
  );
};

export default Latest;
