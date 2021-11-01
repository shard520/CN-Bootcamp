import { useState } from 'react';
import Gallery from '../components/Gallery';
import PageSelect from '../components/PageSelect';
import RoverSelect from '../components/RoverSelect';
import SearchBtn from '../components/SearchBtn';

import fetcher from '../utils/fetcher';

const Latest = ({
  handlePageSelect,
  data: { latest_photos: data },
  setData,
}) => {
  const [latestRover, setLatestRover] = useState('curiosity');

  let page = 1;

  const url = `https://mars-photos.herokuapp.com/api/v1/rovers/${latestRover}/latest_photos?api_key=DEMO_KEY&page=${page}`;

  const handleLatestRover = e => {
    setLatestRover(e.target.value);
  };

  const handleSearch = () => {
    setData(async () => {
      const data = await fetcher(url);
      console.log('data: ' + data);

      return data;
    });
  };

  return (
    <>
      <h1>Latest Mars Rover Pictures:</h1>
      <div className="input">
        <RoverSelect handleRoverSelect={handleLatestRover} />
        <PageSelect handlePageSelect={handlePageSelect} />
        <SearchBtn handleSearch={handleSearch} />
      </div>
      <Gallery data={data} />
    </>
  );
};

export default Latest;
