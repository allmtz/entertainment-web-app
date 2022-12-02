import { ResultCard } from "./ResultCard";

export const Results = ({ moviesToDisplay,getInfo, favorite, isFavorite}) => {
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
            category={"Movie"}
            title={movie.title}
            releaseDate={
              movie.release_date === undefined
                ? "N/A"
                : movie.release_date.slice(0, 4)
            }
            thumbnailPath={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            favorite={favorite}
            isFavorite={isFavorite}
          />
        ))}
      </div>
    </section>
  );
};
