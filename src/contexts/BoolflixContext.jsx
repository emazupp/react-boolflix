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
        const filmsGetted = result.results.map((film) => ({
          id: film.id,
          type: "movie",
          language: film.original_language.toUpperCase(),
          originalTitle: film.original_title,
          title: film.title,
          vote: film.vote_average,
          img: film.poster_path,
          description: film.overview,
          genresIDs: film.genre_ids,
          descriptionFetched: false,
        }));
        setFilmsData({ ...filmsData, films: filmsGetted });
      });
  };

  const searchTvSeries = (value) => {
    fetch(`https://api.themoviedb.org/3/search/tv?query=${value}`, options)
      .then((res) => res.json())
      .then((result) => {
        const tvSeriesGetted = result.results.map((tvSeries) => ({
          id: tvSeries.id,
          type: "tv",
          language: tvSeries.original_language.toUpperCase(),
          originalTitle: tvSeries.original_name,
          title: tvSeries.name,
          vote: tvSeries.vote_average,
          img: tvSeries.poster_path,
          description: tvSeries.overview,
          genresIDs: tvSeries.genre_ids,
          descriptionFetched: false,
        }));
        setTvSeriesData({ ...tvSeriesData, tvSeries: tvSeriesGetted });
      });
  };
  const [filmsData, setFilmsData] = useState({
    films: [],
    searchFilms,
  });

  const [tvSeriesData, setTvSeriesData] = useState({
    tvSeries: [],
    searchTvSeries,
  });

  async function fetchGenres(type, genresIDs) {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/${type}/list`,
      options
    );
    const data = await res.json();
    return data.genres
      .filter((el) => genresIDs.includes(el.id))
      .map((el) => el.name)
      .join(", ");
  }

  async function fetchCast(type, id) {
    const res = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/credits`,
      options
    );
    const data = await res.json();
    return data.cast
      .filter((el, index) => index < 5)
      .map((el) => el.name)
      .join(", ");
  }

  const fetchDescriptionValues = async (type, id, genresIDs) => {
    const newCast = await fetchCast(type, id);
    const newGenres = await fetchGenres(type, genresIDs);

    setCast(newCast);
    setGenres(newGenres);

    if (type == "movie") {
      const newFilmsData = filmsData.films.map((el) => {
        if (el.id == id)
          return {
            ...el,
            cast: newCast,
            genres: newGenres,
            descriptionFetched: true,
          };
        else return el;
      });

      setFilmsData({ ...filmsData, films: newFilmsData });
    } else if (type == "tv") {
      const newTvSeries = tvSeriesData.tvSeries.map((el) => {
        if (el.id == id)
          return {
            ...el,
            cast: newCast,
            genres: newGenres,
            descriptionFetched: true,
          };
        else return el;
      });

      setTvSeriesData({ ...tvSeriesData, tvSeries: newTvSeries });
    }
  };

  const [cast, setCast] = useState([]);
  const [genres, setGenres] = useState([]);

  return (
    <BoolflixContext.Provider
      value={{ filmsData, tvSeriesData, fetchDescriptionValues }}
    >
      {children}
    </BoolflixContext.Provider>
  );
};
