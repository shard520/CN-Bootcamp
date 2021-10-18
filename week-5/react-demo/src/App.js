import React from 'react';
import './App.css';

import Movie from './components/Movie';

const App = () => {
  return (
    <div className="App">
      <h1>Components</h1>
      <FuncComp />
      <ClassComp />
      <Movie />
      <Person name="Fred" age="83" />
      <Person name="Peter Pan" age="9" />
      <Person name="Gandalf" age="976" />
    </div>
  );
};

const FuncComp = () => {
  return <p>I'm a functional component</p>;
};

class ClassComp extends React.Component {
  render() {
    return <p>I'm a class component</p>;
  }
}

const Person = props => {
  return (
    <p>
      I'm {props.name} and I'm {props.age} years old
    </p>
  );
};

export default App;
