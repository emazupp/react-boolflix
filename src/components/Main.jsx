import { useBoolflixContext } from "../contexts/BoolflixContext";
import ResultSection from "./ResultSection";

export default function Main() {
  const { filmsData, tvSeriesData } = useBoolflixContext();
  return (
    <>
      <main className="container">
        <ResultSection data={filmsData.films}>
          <h4>MOVIES</h4>
        </ResultSection>

        <ResultSection data={tvSeriesData.tvSeries}>
          <h4>TV SERIES</h4>
        </ResultSection>
      </main>
    </>
  );
}
