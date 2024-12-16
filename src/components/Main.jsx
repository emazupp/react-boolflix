import { useBoolflixContext } from "../contexts/BoolflixContext";

export default function Main() {
  const { filmsData, tvSeriesData } = useBoolflixContext();
  return (
    <>
      <main>
        <h4>MOVIES</h4>
        <ul>
          {filmsData.films &&
            filmsData.films.map((film, index) => (
              <li key={index}>
                {film.original_title}
                {film.title}
                <img
                  src={`https://flagsapi.com/${
                    film.original_language.toUpperCase() == "EN"
                      ? "GB"
                      : film.original_language.toUpperCase()
                  }/flat/64.png`}
                  alt={film.original_language.toUpperCase()}
                ></img>
                {film.vote_average}
              </li>
            ))}
        </ul>

        <h4>TV SERIES</h4>
        <ul>
          {tvSeriesData.tvSeries &&
            tvSeriesData.tvSeries.map((serie, index) => (
              <li key={index}>
                {serie.original_name}
                {serie.name}
                <img
                  src={`https://flagsapi.com/${
                    serie.original_language.toUpperCase() == "EN"
                      ? "GB"
                      : serie.original_language.toUpperCase()
                  }/flat/64.png`}
                  alt={serie.original_language.toUpperCase()}
                ></img>
                {serie.vote_average}
              </li>
            ))}
        </ul>
      </main>
    </>
  );
}
