import Gallery from '../components/Gallery';
import PageSelect from '../components/PageSelect';
import RoverSelect from '../components/RoverSelect';
import SolSelect from '../components/SolSelect';

const Sol = ({
  handleRoverSelect,
  handlePageSelect,
  handleSolSelect,
  solValue,
  data: { photos: data },
}) => {
  return (
    <>
      <h1>Select Sol:</h1>
      <div className="input">
        <RoverSelect handleRoverSelect={handleRoverSelect} />
        <SolSelect handleSolSelect={handleSolSelect} solValue={solValue} />
        <PageSelect handlePageSelect={handlePageSelect} />
        <Gallery data={data} />
      </div>
    </>
  );
};

export default Sol;
