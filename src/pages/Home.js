import { Results } from "../components/Results"
import { Landing } from "../components/Landing"
import { Carousel } from "../components/Carousel"

export const Home = ({ trending, moviesToDisplay, getInfo, action, western, comedy, animation, romance, drama, fantasy }) => {
    return(
        <>
            { moviesToDisplay != null ? <Results moviesToDisplay={moviesToDisplay} getInfo={getInfo} /> : <Landing trending={trending} getInfo={getInfo} action={action} western={western} comedy={comedy} animation={animation} romance={romance} drama={drama} fantasy={fantasy} /> }
        </>
    )
}