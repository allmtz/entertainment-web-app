import {displayPlay} from "../App"
import {hidePlay} from "../App"
import { Link } from "react-router-dom"

export const ResultCard = ( { movie, movieID, getInfo, category, title, releaseDate, thumbnailPath, favorite, isFavorite } ) => {
    return(
        <div>
              <div className="result-thumbnail" onMouseEnter={displayPlay} onMouseLeave={hidePlay} style={{backgroundImage:`url(${thumbnailPath})`}}>
              <div className="play-container">
                 <Link className="row"  to={`/info/${movieID}`}>
                    <button onClick={ () => getInfo(movieID) } className="play-btn">
                    <img
                      src="/assets/icon-play.svg"
                      alt="Play button"
                    />
                    </button>
                    <button onClick={ () => getInfo(movieID) }>Play</button>
                  </Link>
              </div>
                <button onClick={ () => favorite(movie)} className={ isFavorite(movie.id) ? "bookmark-btn favorite" : "bookmark-btn"}>
                  <img
                    className="bookmark"
                    src="/assets/icon-bookmark-empty.svg"
                    alt="Bookmark"
                  />
                </button>
              </div>
              <div className="result-movie-info">
                <div className="row">
                  <p>{releaseDate}</p>
                  <p>•</p>
                  <img src="/assets/icon-category-movie.svg" alt="" />
                  <p>{category}</p>
                </div>
                <h1>{title}</h1>
              </div>
            </div>
    )
}