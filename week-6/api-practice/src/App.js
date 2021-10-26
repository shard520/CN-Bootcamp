import { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import RoverSelect from './components/RoverSelect';

import './App.css';
import PageSelect from './components/PageSelect';

const App = () => {
  const [rover, setRover] = useState('curiosity');
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const url = `https://mars-photos.herokuapp.com/api/v1/rovers/${rover}/latest_photos?api_key=DEMO_KEY&page=${page}`;

  const handleRoverSelect = e => {
    setRover(e.target.value);
  };

  const handlePageSelect = e => {
    const value = e.target.value;
    if (value === 'home') setPage(1);
    if (value === 'prev') {
      setPage(() => (page > 1 ? page - 1 : 1));
    }
    if (value === 'next') setPage(page + 1);
  };

  const fetcher = async () => {
    try {
      const fetchedData = await fetch(url);
      if (fetchedData.status !== 200)
        throw new Error(`${fetchedData.status} - ${fetchedData.statusText}`);

      const { latest_photos: res } = await fetchedData.json();
      setData(res);
    } catch (err) {
      console.error(`💥💥 ${err.message}`);
    }
  };

  useEffect(() => {
    fetcher();
    // eslint-disable-next-line
  }, [rover, page]);

  return (
    <div>
      <h1>Latest Mars Rover Pictures:</h1>
      <RoverSelect handleRoverSelect={handleRoverSelect} />
      <PageSelect handlePageSelect={handlePageSelect} />
      <Gallery data={data} />
    </div>
  );
};

export default App;
