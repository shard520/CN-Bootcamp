import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Latest from './pages/Latest';

const App = () => {
  const [rover, setRover] = useState('curiosity');
  const [query, setQuery] = useState('photos');
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const url = `https://mars-photos.herokuapp.com/api/v1/rovers/${rover}/${query}?api_key=DEMO_KEY&page=${page}`;

  const handleRoverSelect = e => {
    setQuery('latest_photos');
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
    <Router>
      <div>
        <nav>
          <li>
            <Link to="/Latest">Latest Photos</Link>
          </li>
        </nav>

        <Switch>
          <Route path="/latest">
            <Latest
              handleRoverSelect={handleRoverSelect}
              handlePageSelect={handlePageSelect}
              data={data}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
