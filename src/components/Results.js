import { ResultCard } from "./ResultCard";

export const Results = ({ moviesToDisplay, getInfo, favorite, isFavorite }) => {
  return (
    <section className="results">
      <h2>{moviesToDisplay.length} Results</h2>

      <div className="results-container">
        {moviesToDisplay.map((movie) => (
          <ResultCard
            key={movie.id}
            movie={movie}
            movieID={movie.id}
            getInfo={getInfo}
            thumbnailPath={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            favorite={favorite}
            isFavorite={isFavorite}
          />
        ))}
      </div>
    </section>
  );
};
