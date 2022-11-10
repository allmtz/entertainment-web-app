export const RecommendedCard = ({displayPlay, hidePlay, category, title, releaseDate, thumbnailPath}) => {
    return(
        <div className="recommended-card">
              <div className="recommended-thumbnail" onMouseEnter={displayPlay} onMouseLeave={hidePlay} style={{backgroundImage:`url(${thumbnailPath})`}}>
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
              </div>
              <div className="recommended-movie-info">
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