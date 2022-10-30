export const RecommendedCard = ({category, title, releaseDate, rating, thumbnailPath}) => {
    return(
        <div className="recommended-card">
              <div className="recommended-thumbnail" style={{backgroundImage:`url(${thumbnailPath})`}}>
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
                  <p>•</p>
                  <p>{rating}</p>
                </div>
                <h1>{title}</h1>
              </div>
            </div>
    )
}