import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onSelect }) => {
  return (
    <ul className={css.gallery}>
      {images.map((img) => (
        <ImageCard key={img.id} img={img} onSelect={onSelect} />
      ))}
    </ul>
  );
};

export default ImageGallery;
