import Gallery from '../components/Gallery';
import PageSelect from '../components/PageSelect';
import RoverSelect from '../components/RoverSelect';

const Latest = ({ handleRoverSelect, handlePageSelect, data }) => {
  return (
    <>
      <h1>Latest Mars Rover Pictures:</h1>
      <RoverSelect handleRoverSelect={handleRoverSelect} />
      <PageSelect handlePageSelect={handlePageSelect} />
      <Gallery data={data} />
    </>
  );
};

export default Latest;
