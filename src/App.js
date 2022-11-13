import "./App.css";
import { RecommendedCard } from "./RecommendedCard";
import { TrendingCard } from "./TrendingCard";

import {ReactComponent as HomeIcon} from './assets/icon-nav-home.svg'  
import {ReactComponent as MovieIcon} from './assets/icon-nav-movies.svg'  
import {ReactComponent as TvIcon} from './assets/icon-nav-tv-series.svg'  
import {ReactComponent as BookmarkIconNav} from './assets/icon-nav-bookmark.svg'  
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const API_KEY = "YOUR_KEY";


function displayPlay(e){
  if(e.target.querySelector('.play-container')){
    e.target.querySelector('.play-container').style.scale = 1
  }
}

function hidePlay(){
  document.querySelectorAll('.play-container').forEach(container => container.style.scale = 0)
}

function App() {

  const [ moviesToDisplay, setMoviesToDisplay ] = useState([])
  const [ trending, setTrending ] = useState([])
  const searchRef = useRef(null)

  useEffect( () => { 
    getTrending()
  },[])

  function handleSubmit(e){
    e.preventDefault()

    getUserSearch(searchRef.current.value)

    searchRef.current.value = ''
  }


  async function getUserSearch(userSearch) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${String(
        userSearch
      )}`
    );
    const movies = await response.json();
    // console.log(movies);  the response from movieDB


    //filter out movies missing either an overview or backdrop
    const filteredResults =  movies.results.filter(movie => {
      if(movie.overview === "" || movie.poster_path == null){
        return false
      }
      return true

    })

    setMoviesToDisplay(filteredResults)
    console.log(moviesToDisplay)

  }

  async function getTrending(){
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );
    const nowTrending = await response.json();

    setTrending(nowTrending.results)
  }

  return (
    <div className="container">
      <nav>
        <img className="site-logo" src="/assets/logo.svg" alt="site logo" />

        <ul>
          <li><HomeIcon /></li>
          <li><MovieIcon /></li>
          <li><TvIcon /></li>
          <li><BookmarkIconNav /></li>
        </ul>

        <img className="avatar" src="/assets/image-avatar.png" alt="avatar" />
      </nav>

      <main>
        <section className="search-section">
          <img src="/assets/icon-search.svg" alt="Search icon" />

          <form onSubmit={handleSubmit}  action="">
            <input
              ref={searchRef}
              type="text"
              name=""
              id=""
              placeholder="Search for movies"
            />
            <button type="submit">Search</button>
          </form>
         

        </section>

        <section className="trending">
          <h2>Trending</h2>
          <div className="trending-carousel">

          {
              trending.map( item =>
                <TrendingCard 
                  key={item.id} 
                  displayPlay={displayPlay} 
                  hidePlay={hidePlay} 
                  category={item.media_type === 'movie' ? "Movie" : "TV Show"} 
                  title={item.media_type === 'movie' ? item.title : item.name} 
                  releaseDate= {item.release_date === undefined ? "N/A" : item.release_date.slice( 0,4 )} 
                  thumbnailPath={`https://image.tmdb.org/t/p/w300${item.poster_path}`} 
                />
              )
            }
          
          </div>
        </section>

        <section className="recommended">
          <h2>{moviesToDisplay.length} Results</h2>
          
          <div className="recommended-container">
            {
              moviesToDisplay.map( movie =>
              <RecommendedCard 
                key={movie.id} 
                displayPlay={displayPlay} 
                hidePlay={hidePlay} 
                category={"Movie"} 
                title={movie.title} 
                releaseDate= {movie.release_date === undefined ? "N/A" : movie.release_date.slice( 0,4 )} 
                thumbnailPath={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
              />
              )
            }
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
