import { useState } from "react";
import { useBoolflixContext } from "../contexts/BoolflixContext";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const { searchFilmsByTitle } = useBoolflixContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchFilmsByTitle(inputValue);
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
