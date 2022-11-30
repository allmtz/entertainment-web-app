export const MovieInfo = ({ movie }) => {
    return(
        <div>
            { movie.title && <h1>{movie.title}</h1>}
            { movie.tagline && <p>{movie.tagline}</p> }
            { movie.release_date && <p>{movie.release_date}</p>}
            { movie.runtime && <p>{movie.runtime} Minutes</p>}
            { movie.vote_count && <p>{movie.vote_count} Votes </p>}
            { movie.vote_average && <p>{movie.vote_average.toFixed(1)} Average </p>}
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" />
            { movie.overview && <p>{movie.overview}</p>}
        </div>
    )
}   