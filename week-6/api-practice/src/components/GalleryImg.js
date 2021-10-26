const GalleryImg = ({ entry, id }) => {
  return (
    <div key={id} className="gallery-entry">
      <h2 className="gallery-entry__heading">Earth Date: {entry.earth_date}</h2>
      <img className="gallery-entry__img" src={entry.img_src} alt="" />
      <p className="gallery-entry__camera">Camera: {entry.camera.full_name}</p>
    </div>
  );
};

export default GalleryImg;
