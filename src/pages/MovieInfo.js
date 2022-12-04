export const MovieInfo = ({ movie }) => {
    return(
        <div className="focused-movie">
            {/* title is a movie name is a tv show  */}
            { movie.title && <h1>{movie.title}</h1>}
            { movie.name && <h1>{movie.name}</h1>}
            
            { movie.tagline && <p>{movie.tagline}</p> }
            { movie.release_date && <p>{movie.release_date.slice(0,4)}</p>}
           <div className="focused-backdrop">
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" />
            </div>
            { movie.runtime && <p>{movie.runtime} Minutes</p>}
            <div className="focused-votes row">
            { movie.vote_average && <p>{movie.vote_average.toFixed(1)} Average </p>}
            { movie.vote_count && <p>{movie.vote_count} Votes </p>}
            </div>
            <div className="focused-overview">
             { movie.overview && <p>{movie.overview}</p>}
            </div>
        </div>
    )
}   