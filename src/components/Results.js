import { ResultCard } from "./ResultCard";

export const Results = ({ displayPlay, hidePlay, moviesToDisplay }) => {
  return (
    <section className="results">
      <h2>{moviesToDisplay.length} Results</h2>

      <div className="results-container">
        {moviesToDisplay.map((movie) => (
          <ResultCard
            key={movie.id}
            displayPlay={displayPlay}
            hidePlay={hidePlay}
            category={"Movie"}
            title={movie.title}
            releaseDate={
              movie.release_date === undefined
                ? "N/A"
                : movie.release_date.slice(0, 4)
            }
            thumbnailPath={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          />
        ))}
      </div>
    </section>
  );
};
