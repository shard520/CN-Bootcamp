import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Latest from './pages/Latest';
import Sol from './pages/Sol';

const App = () => {
  const [rover, setRover] = useState('curiosity');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [solValue, setSolvalue] = useState(1);
  const [params, setParams] = useState('');
  const [data, setData] = useState([]);

  const url = `https://mars-photos.herokuapp.com/api/v1/rovers/${rover}/${query}?api_key=DEMO_KEY&page=${page}${params}`;

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

  const handleSolSelect = e => {
    const val = e.target.value;
    setSolvalue(val);
    setParams(`&sol=${val}`);
  };

  const fetcher = async () => {
    try {
      const fetchedData = await fetch(url);
      if (fetchedData.status !== 200)
        throw new Error(`${fetchedData.status} - ${fetchedData.statusText}`);

      const res = await fetchedData.json();
      setData(res);
      console.log(res);
    } catch (err) {
      console.error(`💥💥 ${err.message}`);
    }
  };

  useEffect(() => {
    console.log(url);

    fetcher();
    // eslint-disable-next-line
  }, [rover, page, query, params]);

  return (
    <Router>
      <div>
        <nav>
          <li>
            <Link onClick={() => setQuery('latest_photos')} to="/latest">
              Latest Photos
            </Link>
          </li>
          <li>
            <Link onClick={() => setQuery('photos')} to="/sol">
              Select by Sol
            </Link>
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
          <Route path="/sol">
            <Sol
              handleRoverSelect={handleRoverSelect}
              handlePageSelect={handlePageSelect}
              handleSolSelect={handleSolSelect}
              solValue={solValue}
              data={data}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
