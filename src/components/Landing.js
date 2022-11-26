import { Carousel } from "./Carousel"

export const Landing = ( {action, western, comedy, animation, romance, drama, fantasy } ) => {
    return(
        <> 
        <Carousel genre={"Action"} genreMovies={action}  />
        <Carousel genre={"Western"} genreMovies={western}  />
        <Carousel genre={"Comedy"} genreMovies={comedy}  />
        <Carousel genre={"Animation"} genreMovies={animation}  />
        <Carousel genre={"Romance"} genreMovies={romance}  />
        <Carousel genre={"Drama"} genreMovies={drama} />
        <Carousel genre={"Fantasy"} genreMovies={fantasy}  />
        </>
    )
}