import { Carousel } from "../components/Carousel"

export const Home = ({ trending, getInfo, action, western, comedy, animation, romance, drama, fantasy, favorite, isFavorite, mediaType }) => {
    return(
        <>
        <Carousel getInfo={getInfo} genre={"Trending"} genreMovies={trending} favorite={favorite} isFavorite={isFavorite} mediaType={mediaType} />
        <Carousel getInfo={getInfo} genre={"Action"} genreMovies={action}  favorite={favorite} isFavorite={isFavorite} mediaType={mediaType} />
        <Carousel getInfo={getInfo} genre={"Western"} genreMovies={western} favorite={favorite} isFavorite={isFavorite} mediaType={mediaType} />
        <Carousel getInfo={getInfo} genre={"Comedy"} genreMovies={comedy} favorite={favorite} isFavorite={isFavorite} mediaType={mediaType} />
        <Carousel getInfo={getInfo} genre={"Animation"} genreMovies={animation} favorite={favorite} isFavorite={isFavorite} mediaType={mediaType} />
        <Carousel getInfo={getInfo} genre={"Romance"} genreMovies={romance} favorite={favorite} isFavorite={isFavorite} mediaType={mediaType} />
        <Carousel getInfo={getInfo} genre={"Drama"} genreMovies={drama} favorite={favorite} isFavorite={isFavorite} mediaType={mediaType} />
        <Carousel getInfo={getInfo} genre={"Fantasy"} genreMovies={fantasy} favorite={favorite} isFavorite={isFavorite} mediaType={mediaType}  /> 
        </>
    )
}