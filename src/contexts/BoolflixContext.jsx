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
  const searchFilms = (value) => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${value}`, options)
      .then((res) => res.json())
      .then((result) => {
        console.log("api films eseguita");

        const filmsGetted = result.results;
        setFilms({ ...filmsData, films: filmsGetted });
      });
  };

  const searchTvSeries = (value) => {
    fetch(`https://api.themoviedb.org/3/search/tv?query=${value}`, options)
      .then((res) => res.json())
      .then((result) => {
        console.log("api tv eseguita");

        const tvSeriesGetted = result.results;
        setTvSeries({ ...tvSeriesData, tvSeries: tvSeriesGetted });
      });
  };
  const [filmsData, setFilms] = useState({
    films: [],
    searchFilms,
  });

  const [tvSeriesData, setTvSeries] = useState({
    tvSeries: [],
    searchTvSeries,
  });

  return (
    <BoolflixContext.Provider value={{ filmsData, tvSeriesData }}>
      {children}
    </BoolflixContext.Provider>
  );
};
