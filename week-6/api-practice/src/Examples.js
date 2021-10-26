import { useState } from 'react';
import './App.css';

function App() {
  const [adviceArr, setAdviceArr] = useState([]);
  const [jokesArr, setJokesArr] = useState([]);
  const [character, setCharacter] = useState({
    name: '',
    img: '',
    psiPowers: [],
  });
  const [error, setError] = useState('');

  const adviceFetcher = async () => {
    try {
      const data = await fetch('https://api.adviceslip.com/advice');
      if (data.status !== 200)
        throw new Error(`${data.status} - ${data.statusText}`);
      const response = await data.json();

      setAdviceArr(() => [...adviceArr, response.slip]);
    } catch (err) {
      console.error(`💥💥 ${err}`);
      setError(err);
    }
  };

  const jokeFetcher = async () => {
    try {
      const data = await fetch(
        'https://geek-jokes.sameerkumar.website/api?format=json'
      );
      if (data.status !== 200)
        throw new Error(`${data.status} - ${data.statusText}`);

      const response = await data.json();

      setJokesArr(() => [...jokesArr, response]);
    } catch (err) {
      console.error(`💥💥 ${err}`);
      setError(err);
    }
  };

  const charFetcher = async () => {
    try {
      const data = await fetch(
        'https://psychonauts-api.herokuapp.com/api/characters?limit=1'
      );
      if (data.status !== 200)
        throw new Error(`${data.status} - ${data.statusText}`);

      const [response] = await data.json();
      console.log(response);

      setCharacter(response);
    } catch (err) {
      console.error(`💥💥 ${err}`);
      setError(err);
    }
  };

  return (
    <div className="App">
      {error && <p>Error: {error.message}</p>}
      <button onClick={adviceFetcher}>get advice</button>
      {adviceArr.map((item, i) => {
        return <p key={i}>{item.advice}</p>;
      })}
      <button onClick={jokeFetcher}>get a joke</button>
      {jokesArr.map((item, i) => {
        return <p key={i}>{item.joke}</p>;
      })}
      <button onClick={charFetcher}>get a pyschonauts character</button>
      <p>{character.name}</p>
      <img src={character.img} alt={character.name} />
      {character.psiPowers.map((power, i) => {
        return (
          <div
            key={i}
            style={{ display: 'flex', alignItems: 'center', margin: '10px' }}
          >
            <img
              src={power.img}
              alt=""
              style={{ width: '32px', height: '32px', marginRight: '10px' }}
            />
            <span>{power.description}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
