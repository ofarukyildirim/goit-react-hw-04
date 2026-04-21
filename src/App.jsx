import { useState, useRef, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { fetchImagesWithQuery } from "./api";
import { Toaster } from "react-hot-toast";
import "./App.css";

const App = () => {
  const scrollRef = useRef(null);

  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchImages = async (newQuery) => {
    try {
      setLoading(true);
      setError(false);

      setQuery(newQuery);
      setPage(1);

      const data = await fetchImagesWithQuery(newQuery, 1);
      setImages(data.results);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    try {
      const nextPage = page + 1;
      setPage(nextPage);

      setLoading(true);
      setError(false);

      const data = await fetchImagesWithQuery(query, nextPage);

      setImages((prev) => [...prev, ...data.results]);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (images.length === 0) return;
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [images]);

  const openModal = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar onSubmit={searchImages} />

      {error && <ErrorMessage />}

      <ImageGallery images={images} onSelect={openModal} />

      {loading && <Loader />}

      <div ref={scrollRef} />

      {images.length > 0 && !loading && <LoadMoreBtn handlePage={loadMore} />}

      <ImageModal
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={closeModal}
      />
    </div>
  );
};

export default App;
