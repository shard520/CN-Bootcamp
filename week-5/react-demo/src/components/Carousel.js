import cat1 from '../img/carousel-cat-1.jpg';
import cat2 from '../img/carousel-cat-2.jpg';
import cat3 from '../img/carousel-cat-3.jpg';
import cat4 from '../img/carousel-cat-4.jpg';

const Carousel = () => {
  return (
    <div className="carousel">
      <Item src={cat1} subtitle="cat on a carousel" />
      <Item src={cat2} subtitle="another cat on a carousel" />
      <Item src={cat3} subtitle="yet another cat on a carousel" />
      <Item src={cat4} subtitle="big boi on a carousel" />
    </div>
  );
};

const Item = props => {
  return (
    <div className="carousel__item">
      <img alt={props.subtitle} src={props.src} className="carousel__img" />
      <p className="carousel__subtitle">{props.subtitle}</p>
    </div>
  );
};

export default Carousel;
