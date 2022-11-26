import { CarouselCard } from "./CarouselCard"

export const Carousel = ( { genre, genreMovies, displayPlay, hidePlay } ) => {
    return(
        <section className="carousel-wrapper">
          <h2>{genre}</h2>
          <div className="carousel">
            {
              genreMovies.map( item =>
                <CarouselCard 
                  key={item.id} 
                  displayPlay={displayPlay} 
                  hidePlay={hidePlay} 
                  category={ item.media_type ? item.media_type === 'movie' ? "Movie" : "TV Show" : "Movie"} 
                  title={ item.media_type ? item.media_type === 'movie' ? item.title : item.name : item.title} 
                  releaseDate= {item.release_date === undefined ? "N/A" : item.release_date.slice( 0,4 )} 
                  thumbnailPath={`https://image.tmdb.org/t/p/w300${item.poster_path}`} 
                />
              )
            }
          </div>
        </section>
    )
}