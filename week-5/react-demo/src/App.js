import React from 'react';
import './App.css';
import './styles/Person.css';

import Cat from './components/Cat';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Content from './components/Content';

import catImg from './img/cat.jpg';

const navLinks = [
  { text: 'Home', link: '/index.html' },
  { text: 'About', link: '/about.html' },
  { text: 'Store', link: '/store.html' },
  { text: 'Blog', link: '/blog.html' },
  { text: 'Contact', link: '/contact.html' },
];

const footerLinks = [
  { text: 'Privacy Policy', link: '/privacy.html' },
  { text: 'Returns Policy', link: '/returns.html' },
  { text: 'Fish Policy', link: '/fish.html' },
];

const App = () => {
  return (
    <div className="App">
      <Navbar links={navLinks} />
      <Jumbotron />
      <h2>Components</h2>
      <FuncComp />
      <ClassComp />
      <Person name="Fred" age="83" petName="Steve" type="fluffy cat" />
      <Person name="Alan" age="32" petName="Bob" type="tabby cat"></Person>
      <Job job="junior developer" />
      <Cat src={catImg} />
      <Carousel />
      <Content />
      <Footer links={footerLinks} />
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
    <div className="person">
      <p>
        I'm {props.name} and I'm {props.age} years old
      </p>
      <Pet type={props.type} petName={props.petName} />
    </div>
  );
};

const Job = props => {
  return <p>I'm a {props.job}</p>;
};

const Pet = props => {
  return (
    <p>
      I'm a {props.type} and my name is {props.petName}
    </p>
  );
};

export default App;
