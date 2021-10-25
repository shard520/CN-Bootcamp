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

  const adviceFetcher = async () => {
    const data = await fetch('https://api.adviceslip.com/advice');
    const response = await data.json();

    setAdviceArr(() => [...adviceArr, response.slip]);
  };

  const jokeFetcher = async () => {
    const data = await fetch(
      'https://geek-jokes.sameerkumar.website/api?format=json'
    );
    const response = await data.json();

    setJokesArr(() => [...jokesArr, response]);
  };

  const charFetcher = async () => {
    const data = await fetch(
      'https://psychonauts-api.herokuapp.com/api/characters?limit=1'
    );
    const [response] = await data.json();
    console.log(response);

    setCharacter(response);
  };

  return (
    <div className="App">
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
            style={{ display: 'flex', alignItems: 'center', margin: '10px' }}
          >
            <img
              src={power.img}
              alt=""
              style={{ width: '32px', height: '32px', marginRight: '10px' }}
            />
            <span key={i}>{power.description}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
