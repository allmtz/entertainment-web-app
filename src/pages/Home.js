import { Results } from "../components/Results"
import { Landing } from "../components/Landing"
import { Carousel } from "../components/Carousel"

export const Home = ({ trending, moviesToDisplay, getInfo, action, western, comedy, animation, romance, drama, fantasy }) => {
    return(
        <>
            <Carousel genre={"Trending"} genreMovies={trending} getInfo={getInfo} />
            { moviesToDisplay != null ? <Results moviesToDisplay={moviesToDisplay} getInfo={getInfo} /> : <Landing getInfo={getInfo} action={action} western={western} comedy={comedy} animation={animation} romance={romance} drama={drama} fantasy={fantasy} /> }
        </>
    )
}