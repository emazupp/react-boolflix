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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWE3ZmY4MzQ1YzYyYTY4ZTFkNWE4NTUwOWM0YWU3MSIsIm5iZiI6MTczNDM0ODEyOS4xNDQsInN1YiI6IjY3NjAwZDYxNjczZmZlYTBmMjdkZGI2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.INT5fSfOpuY9CewHWzoLbyt2uDk1Lj-9a9A1-N9Dmq8`,
    },
  };
  const searchFilms = (value) => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${value}`, options)
      .then((res) => res.json())
      .then((result) => {
        const filmsGetted = result.results;
        setFilms({ ...filmsData, films: filmsGetted });
      });
  };

  const searchTvSeries = (value) => {
    fetch(`https://api.themoviedb.org/3/search/tv?query=${value}`, options)
      .then((res) => res.json())
      .then((result) => {
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
