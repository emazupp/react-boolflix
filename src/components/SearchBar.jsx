import { useState } from "react";
import { useBoolflixContext } from "../contexts/BoolflixContext";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const { filmsData, tvSeriesData } = useBoolflixContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    filmsData.searchFilms(inputValue);
    tvSeriesData.searchTvSeries(inputValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="text"
          placeholder="Inserisci titolo"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Cerca</button>
      </form>
    </>
  );
}
