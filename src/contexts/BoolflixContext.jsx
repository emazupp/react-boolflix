import { useContext, useState } from "react";
import { createContext } from "react";

// CREAZIONE CONTESTO
const BoolflixContext = createContext();

// CONSUMER
export const useBoolflixContext = () => useContext(BoolflixContext);

// PROVIDER
export const BoolflixProvider = ({ children }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_APIKEY}`,
    },
  };

  const searchFilmsByTitle = (value) => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${value}`, options)
      .then((res) => res.json())
      .then((films) => {
        const filmsFetched = films.results;
        console.log(filmsFetched);
        const newFilms = { ...data, films: filmsFetched };
        setData(newFilms);
      });
  };

  const [data, setData] = useState({
    films: [],
    searchFilmsByTitle,
  });

  return (
    <BoolflixContext.Provider value={data}>{children}</BoolflixContext.Provider>
  );
};
