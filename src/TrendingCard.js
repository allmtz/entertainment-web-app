export const TrendingCard = ({category, title, releaseDate, rating, thumbnailPath}) =>
{

    return(
        <div className="trending-card" style={{backgroundImage:`url(${thumbnailPath})`}}>
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

