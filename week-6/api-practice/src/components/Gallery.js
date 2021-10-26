import GalleryImg from './GalleryImg';

const Gallery = ({ data }) => {
  return (
    <div className="gallery">
      {data.map((entry, i) => (
        <GalleryImg entry={entry} key={i} id={i} />
      ))}
    </div>
  );
};

export default Gallery;
