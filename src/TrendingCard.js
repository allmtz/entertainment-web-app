export const TrendingCard = ( {displayPlay, hidePlay, category, title, releaseDate, rating, thumbnailPath} ) =>
{

    return(
        <div className="trending-card" onMouseEnter={displayPlay} onMouseLeave={hidePlay} style={{backgroundImage:`url(${thumbnailPath})`}}>
              
              <div className="play-container">
                <img
                    src="/assets/icon-play.svg"
                    alt="Play button"
                  />
                <button className="play-btn">Play</button>
              </div>

              <div className="bookmark-container">
                <img
                  className="bookmark"
                  src="/assets/icon-bookmark-empty.svg"
                  alt="Bookmark"
                />
              </div>
              <div className="movie-info">
                <div className="row">
                  <p>{releaseDate}</p>
                  <p>•</p>
                  <img src="/assets/icon-category-movie.svg" alt="" />
                  <p>{category}</p>
                </div>
                <h1>{title}</h1>
              </div>
              <div className="rating">{rating}</div>
            </div>
    )
}

