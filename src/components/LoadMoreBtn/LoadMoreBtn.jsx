import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handlePage }) => {
  return (
    <button onClick={handlePage} className={css.loadBtn}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
