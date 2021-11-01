import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import fetchManifests from './utils/fetchManifests';

import Latest from './pages/Latest';
import Sol from './pages/Sol';

const App = () => {
  const [manifests, setManifests] = useState({});
  const [rover, setRover] = useState('curiosity');

  const [page, setPage] = useState(1);
  const [solValue, setSolvalue] = useState(1);
  const [params, setParams] = useState('');

  const [data, setData] = useState({});

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

  // fetch manifests on page load
  useEffect(() => {
    setManifests(() => fetchManifests());
  }, []);

  return (
    <Router>
      <div className="app">
        <nav>
          <li>
            <Link to="/latest">Latest Photos</Link>
          </li>
          <li>
            <Link to="/sol">Select by Sol</Link>
          </li>
        </nav>

        <Switch>
          <Route path="/latest">
            <Latest
              handleRoverSelect={handleRoverSelect}
              handlePageSelect={handlePageSelect}
              data={data}
              setData={setData}
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
