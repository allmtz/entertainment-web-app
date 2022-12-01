import { Landing } from "../components/Landing"

export const Home = ({ trending, getInfo, action, western, comedy, animation, romance, drama, fantasy }) => {
    return(
        <>
            <Landing trending={trending} getInfo={getInfo} action={action} western={western} comedy={comedy} animation={animation} romance={romance} drama={drama} fantasy={fantasy} /> 
        </>
    )
}