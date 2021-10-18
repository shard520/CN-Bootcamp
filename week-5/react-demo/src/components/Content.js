import cat1 from '../img/news-cat1.jpg';
import cat2 from '../img/news-cat2.jpg';
import cat3 from '../img/news-cat3.jpg';
import cat4 from '../img/news-cat4.jpg';
import cat5 from '../img/news-cat5.jpg';

const contentData = [
  { src: cat1, alt: '', title: 'Miaow based puns on the rise' },
  { src: cat2, alt: '', title: 'Miaow look here' },
  { src: cat3, alt: '', title: "It's too late miaow" },
  { src: cat4, alt: '', title: "I've had enough miaow" },
  { src: cat5, alt: '', title: 'Ok, can you please stop right miaow' },
];

const Content = () => {
  return (
    <div className="content">
      <div className="content__top">
        <h3 className="content__heading">Local Miaows</h3>
        <hr className="content__line" />
        <p className="content__expand">See All</p>
      </div>
      <div className="content__items">
        {contentData.map(item => {
          return (
            <ContentItem src={item.src} alt={item.alt} title={item.title} />
          );
        })}
      </div>
    </div>
  );
};

const ContentItem = props => {
  return (
    <div className="content__item">
      <img alt={props.alt} src={props.src} className="content__img" />
      <p className="content__title">{props.title}</p>
    </div>
  );
};

export default Content;
