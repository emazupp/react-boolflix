import { useBoolflixContext } from "../contexts/BoolflixContext";

export default function Card({ el }) {
  const defaultPoster = "https://placehold.co/342";
  const imgPath = `https://image.tmdb.org/t/p/w342/${el.img}`;
  const starsArray = ["", "", "", "", ""];
  const maxYellowStars = Math.floor(el.vote / 2);

  const { fetchDescriptionValues } = useBoolflixContext();

  const handleHoverCard = (id, type, genresIDs) => {
    console.log(el);
    !el.descriptionFetched && fetchDescriptionValues(type, id, genresIDs);
  };

  return (
    <>
      <div
        className="card"
        onMouseEnter={() => handleHoverCard(el.id, el.type, el.genresIDs)}
      >
        <div className="card-img">
          <img src={el.img ? imgPath : defaultPoster} alt={el.id} />
        </div>
        <div className="card-description">
          <p>
            <strong>Titolo: </strong>
            {el.title}
          </p>
          <p>
            <strong>Titolo originale: </strong>
            {el.originalTitle}
          </p>
          <p>
            <strong>Voto: </strong>
            {starsArray.map((star, index) =>
              index < maxYellowStars ? (
                <i key={index} className="fa-solid fa-star"></i>
              ) : (
                <i key={index} className="fa-regular fa-star"></i>
              )
            )}
          </p>
          <p>
            <strong>Cast: </strong>
            {el.cast}
          </p>
          <p>
            <strong>Overview: </strong>
            {el.description}
          </p>
          <p>
            <strong>Lingua: </strong>
            <img
              className="lang-img"
              src={`https://flagsapi.com/${
                el.language.toUpperCase() == "EN"
                  ? "GB"
                  : el.language.toUpperCase()
              }/flat/64.png`}
              alt={el.language.toUpperCase()}
            ></img>
          </p>
          <p>
            <strong>Generi: </strong>
            {el.genres}
          </p>
        </div>
      </div>
    </>
  );
}
