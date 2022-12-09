export const MovieInfo = ({ movie }) => {
    const containerWidth = 76
    const starsOutOf5 = (movie.vote_average / 2).toFixed(1) 
    const widthPerStar = containerWidth/5
    const width = starsOutOf5 * widthPerStar
    return(
        <div className="focused-movie">
            {/* title is a movie, name is a tv show  */}
            { movie.title && <h1>{movie.title}</h1>}
            { movie.name && <h1>{movie.name}</h1>}
            { movie.tagline && <p>{movie.tagline}</p> }
            { movie.release_date && <p>{movie.release_date.slice(0,4)}</p>}
           <div className="focused-backdrop">
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" />
           </div>
            { movie.runtime && <p>{movie.runtime} Minutes</p>}
            <div className="focused-votes row">
                { movie.vote_average && <p className="focused-average">{ starsOutOf5 }</p>}
                {movie.vote_average && 
                    <div className="rating-container" style={{width:`${width}px`}} >
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                    </div>
                }
            </div>
            { movie.vote_count && <p>{movie.vote_count} Votes </p>}
            <div className="focused-overview">
             { movie.overview && <p>{movie.overview}</p>}
            </div>
        </div>
    )
}   