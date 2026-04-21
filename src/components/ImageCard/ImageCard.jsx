import css from "./ImageCard.module.css";

const ImageCard = ({ img, onSelect }) => {
  return (
    <li className={css.item} onClick={() => onSelect(img)}>
      <div className={css.card}>
        <img src={img.urls.small} alt={img.alt_description || "image"} />
      </div>
    </li>
  );
};

export default ImageCard;
