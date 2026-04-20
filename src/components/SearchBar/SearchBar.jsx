import { useState } from "react";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={css.search}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search images and photos"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
