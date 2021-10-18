import catMask from '../img/cat-mask.jpg';

const Jumbotron = props => {
  return (
    <div className="jumbotron">
      <h1 className="jumbotron__heading">
        Welcome to <span className="strike">React</span> Recat
      </h1>
      <img alt="cat with mask" src={catMask} width="30%" height="30%" />
    </div>
  );
};

export default Jumbotron;
