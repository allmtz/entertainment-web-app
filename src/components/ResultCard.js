import {displayPlay} from "../App"
import {hidePlay} from "../App"
import { Link } from "react-router-dom"

export const ResultCard = ( { movie, movieID, getInfo, thumbnailPath, favorite, isFavorite } ) => {
    return(
        <div>
              <div className="result-thumbnail" onMouseEnter={displayPlay} onMouseLeave={hidePlay} style={{backgroundImage:`url(${thumbnailPath})`}}>
              <div className="play-container">
                 <Link className="row"  to={`/info/${movieID}`}>
                    <button onClick={ () => getInfo(movieID,movie.title ? "movie" : "tv" ) } className="play-btn">
                    <img
                      src="/assets/icon-play.svg"
                      alt="Play button"
                    />
                    </button>
                    <button onClick={ () => getInfo(movieID,movie.title ? "movie" : "tv" ) }>Play</button>
                  </Link>
              </div>
                <button onClick={ () => favorite(movie)} className={ isFavorite(movie) ? "bookmark-btn favorite" : "bookmark-btn"}>
                  <img
                    className="bookmark"
                    src="/assets/icon-bookmark-empty.svg"
                    alt="Bookmark"
                  />
                </button>
              </div>
              <div className="result-movie-info">
                <div className="row">
                  <p>
                    {movie.release_date && movie.release_date.slice(0,4)}
                    {movie.first_air_date && movie.first_air_date.slice(0,4)}
                  </p>
                  <p>•</p>
                  <img src={movie.title ? "/assets/icon-category-movie.svg" : "/assets/icon-category-tv.svg" } alt="" />
                  <p>
                    {movie.title && "Movie"}
                    {movie.name && "TV Show"}
                  </p>
                </div>
                <h1>
                  {movie.title && movie.title}
                  {movie.name && movie.name}
                </h1>
              </div>
            </div>
    )
}