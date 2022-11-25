import { TrendingCard } from "./TrendingCard"

export const Trending = ({trending, displayPlay, hidePlay}) => {
    return(
        <section className="trending">
          <h2>Trending</h2>
          <div className="trending-carousel">

          {
              trending.map( item =>
                <TrendingCard 
                  key={item.id} 
                  displayPlay={displayPlay} 
                  hidePlay={hidePlay} 
                  category={item.media_type === 'movie' ? "Movie" : "TV Show"} 
                  title={item.media_type === 'movie' ? item.title : item.name} 
                  releaseDate= {item.release_date === undefined ? "N/A" : item.release_date.slice( 0,4 )} 
                  thumbnailPath={`https://image.tmdb.org/t/p/w300${item.poster_path}`} 
                />
              )
            }
          
          </div>
        </section>


    )
}