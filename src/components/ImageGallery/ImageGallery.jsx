import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onSelect }) => {
  return (
    <ul className={css.gallery}>
      {images.map((img) => (
        <li key={img.id} onClick={() => onSelect(img)}>
          <div className={css.card}>
            <img src={img.urls.small} alt={img.alt_description} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
