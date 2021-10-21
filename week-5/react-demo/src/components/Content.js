import cat1 from '../img/news-cat1.jpg';
import cat2 from '../img/news-cat2.jpg';
import cat3 from '../img/news-cat3.jpg';
import cat4 from '../img/news-cat4.jpg';
import cat5 from '../img/news-cat5.jpg';

const contentData = [
  {
    src: cat1,
    title: 'Miaow based puns on the rise',
    description:
      'After a rapid rise in bad puns, Felix warned people that miaow is not the time to become complacent.',
    time: '3h',
    section: 'Science',
  },
  {
    src: cat2,
    title: 'Miaow look here',
    description:
      'Doctors are concerned after a study showed an alarming increase of the use of Catamine in young cats.',
    time: '8h',
    section: 'Health',
  },
  {
    src: cat3,
    title: "It's too late miaow",
    description:
      "Calls grow for a change in the law after it emerged that one cat's owner failed to feed their cat after an agonising wait of 30 minutes.",
    time: '6h',
    section: 'Politics',
  },
  {
    src: cat4,
    title: "I've had enough miaow",
    description:
      'The new pawball season is off to a chaotic start after the introduction of a new tin foil ball, causing scenes described by one cat as "ludicrous displays"',
    time: '12h',
    section: 'Sport',
  },
  {
    src: cat5,
    title: 'Ok, can you please stop right miaow',
    description:
      'Cat campaigners have renewed their calls for Twitter to retire their bird logo, allowing cats to use the service instead of pawing at the screen everytime they see the bird.',
    time: '5h',
    section: 'Technology',
  },
];

const Content = () => {
  return (
    <div className="content">
      <ContentTop />
      <div className="content__items">
        {contentData.map((item, i) => {
          return (
            <ContentItem
              key={i}
              src={item.src}
              alt={item.title}
              title={item.title}
              description={item.description}
              time={item.time}
              section={item.section}
            />
          );
        })}
      </div>
    </div>
  );
};

const ContentItem = props => {
  return (
    <div className="content__item">
      <div className="content__top-wrapper">
        <img alt={props.alt} src={props.src} className="content__img" />
        <p className="content__title">{props.title}</p>
      </div>
      <div className="content__bottom-wrapper">
        <p className="content__preview">{props.description}</p>
        <div className="content__bottom">
          <p className="content__time">{props.time}</p>
          <p className="content__section">{props.section}</p>
        </div>
      </div>
    </div>
  );
};

const ContentTop = () => {
  return (
    <div className="content__header">
      <h3 className="content__heading">Local Miaows</h3>
      <hr className="content__line" />
      <p className="content__expand">See All</p>
    </div>
  );
};

export default Content;
