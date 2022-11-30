import { Carousel } from "./Carousel"

export const Landing = ( {getInfo, action, western, comedy, animation, romance, drama, fantasy } ) => {
    return(
        <> 
        <Carousel getInfo={getInfo} genre={"Action"} genreMovies={action}  />
        <Carousel getInfo={getInfo} genre={"Western"} genreMovies={western}  />
        <Carousel getInfo={getInfo} genre={"Comedy"} genreMovies={comedy}  />
        <Carousel getInfo={getInfo} genre={"Animation"} genreMovies={animation}  />
        <Carousel getInfo={getInfo} genre={"Romance"} genreMovies={romance}  />
        <Carousel getInfo={getInfo} genre={"Drama"} genreMovies={drama} />
        <Carousel getInfo={getInfo} genre={"Fantasy"} genreMovies={fantasy}  />
        </>
    )
}