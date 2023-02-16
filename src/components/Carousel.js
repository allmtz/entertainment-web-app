import { CarouselCard } from "./CarouselCard";

export const Carousel = ({
  genre,
  genreMovies,
  getInfo,
  favorite,
  isFavorite,
  mediaType,
}) => {
  return (
    <section className="carousel-section">
      <h2>{genre}</h2>
      <div className="carousel">
        {genreMovies.map((item) => (
          <CarouselCard
            key={item.id}
            movie={item}
            movieID={item.id}
            getInfo={getInfo}
            thumbnailPath={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
            favorite={favorite}
            isFavorite={isFavorite}
            mediaType={mediaType}
          />
        ))}
      </div>
    </section>
  );
};
