import { useBoolflixContext } from "../contexts/BoolflixContext";

export default function Main() {
  const { films } = useBoolflixContext();
  return (
    <>
      <main>
        {console.log(films)}
        <ul>
          {films &&
            films.map((film, index) => (
              <li key={index}>
                {film.original_title}
                {film.title}
                {film.original_language}
                {film.vote_average}
              </li>
            ))}
        </ul>
      </main>
    </>
  );
}
