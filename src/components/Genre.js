import { TrendingCard } from "./TrendingCard"

export const Genre = ( { genre, genreMovies, displayPlay, hidePlay } ) => {
    return (
        <div className="trending-carousel">
            <h2>{genre}</h2>
            {
              genreMovies.map( movie =>
                <TrendingCard 
                  key={movie.id} 
                  displayPlay={displayPlay} 
                  hidePlay={hidePlay} 
                  category={"Movie"} 
                  title={movie.title} 
                  releaseDate= {movie.release_date === undefined ? "N/A" : movie.release_date.slice( 0,4 )} 
                  thumbnailPath={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
                />
              )
            }
        </div>
    )
}