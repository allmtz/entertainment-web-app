import { Link } from "react-router-dom";
import { displayPlay } from "../App";
import { hidePlay } from "../App";

export const CarouselCard = ({
  movie,
  movieID,
  getInfo,
  thumbnailPath,
  favorite,
  isFavorite,
  mediaType,
}) => {
  return (
    <div
      className="carousel-wrapper"
      onMouseEnter={displayPlay}
      onMouseLeave={hidePlay}
    >
      <div
        className="carousel-card"
        style={{ backgroundImage: `url(${thumbnailPath})` }}
      ></div>
      <Link
        to={`/info/${movieID}`}
        className="play-container "
        onClick={() => getInfo(movieID, mediaType)}
      >
        <div className="row play-links">
          <img
            className="play-btn"
            src="/assets/icon-play.svg"
            alt="Play button"
          />
          <p>Play</p>
        </div>
      </Link>
      <button
        onClick={() => favorite(movie)}
        className={isFavorite(movie) ? "bookmark-btn favorite" : "bookmark-btn"}
      >
        <img
          className="bookmark"
          src="/assets/icon-bookmark-empty.svg"
          alt="Bookmark"
        />
      </button>
      <div className="movie-info">
        <div className="row">
          <p>
            {movie.release_date && movie.release_date.slice(0, 4)}
            {movie.first_air_date && movie.first_air_date.slice(0, 4)}
          </p>
          <p>•</p>
          <img src={`/assets/icon-category-${mediaType}.svg`} alt="" />
          <p>
            {mediaType === "movie" && "Movie"}
            {mediaType === "tv" && "TV Show"}
          </p>
        </div>
        <h1>
          {mediaType === "movie" && movie.title}
          {mediaType === "tv" && movie.name}
        </h1>
      </div>
    </div>
  );
};
