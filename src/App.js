// components
import "./App.css";
import { Nav } from "./components/Nav";
import { Searchbar } from "./components/Searchbar";
// pages
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { MovieInfo } from "./pages/MovieInfo";
import { Tv } from "./pages/Tv";
// react
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Results } from "./components/Results";

const API_KEY = "2fa9b8c3457255630ef48d6faeab6c29";


export const displayPlay = (e) =>{
  if(e.target.querySelector('.play-container')){
    e.target.querySelector('.play-container').style.scale = 1
  }
}

export const hidePlay = () =>{
  document.querySelectorAll('.play-container').forEach(container => container.style.scale = 0)
}

function App() {

  const navigate = useNavigate()

  const [ moviesToDisplay, setMoviesToDisplay ] = useState([])
  const [ trending, setTrending ] = useState([])
  const searchRef = useRef(null)

  // used when fetching movie categories
  const [ action, setAction ] = useState([])
  const [ comedy, setComedy ] = useState([])
  const [ western, setWestern ] = useState([])
  const [ fantasy, setFantasy ] = useState([])
  const [ animation, setAnimation ] = useState([])
  const [ romance, setRomance ] = useState([])
  const [ drama, setDrama ] = useState([])

  // used when fetching TV categories
  const [ trendingTV, setTrendingTV ] = useState([])
  const [ actionTV, setActionTV ] = useState([])
  const [ comedyTV, setComedyTV ] = useState([])
  const [ westernTV, setWesternTV ] = useState([])
  const [ animationTV, setAnimationTV ] = useState([])
  const [ romanceTV, setRomanceTV ] = useState([])
  const [ dramaTV, setDramaTV ] = useState([])

  const [ focusedMovie, setFocusedMovie ] = useState([])
  
  const [ favorites, setFavorites ] = useState( () => {
    const localFavorites = JSON.parse( localStorage.getItem("localFavorites") )

    if( localFavorites && localFavorites!== null){
      return localFavorites
    }
    else{
      return []
    }
  })

  useEffect( () => { 
    getTrending("movie",setTrending)
    getGenre("movie",36,setAction)
    getGenre("movie",35,setComedy)
    getGenre("movie",37,setWestern)
    getGenre("movie",14,setFantasy)
    getGenre("movie",16,setAnimation)
    getGenre("movie",10749,setRomance)
    getGenre("movie",18,setDrama)

    getTrending("tv",setTrendingTV)
    getGenre("tv",36,setActionTV)
    getGenre("tv",35,setComedyTV)
    getGenre("tv",37,setWesternTV)
    getGenre("tv",16,setAnimationTV)
    getGenre("tv",10749,setRomanceTV)
    getGenre("tv",18,setDramaTV)

  },[])

  useEffect( () => {
    const favsToStore = JSON.stringify(favorites)

    localStorage.setItem("localFavorites", favsToStore)

  },[favorites])

  // takes a genre code then sets state for that genre
  async function getGenre(mediaType,genreCode,setGenre){
    //Genre codes
    //     MOVIE
    // Action          28
    // Adventure       12
    // Animation       16
    // Comedy          35
    // Crime           80
    // Documentary     99
    // Drama           18
    // Family          10751
    // Fantasy         14
    // History         36
    // Horror          27
    // Music           10402
    // Mystery         9648
    // Romance         10749
    // Science Fiction 878
    // TV Movie        10770
    // Thriller        53
    // War             10752
    // Western         37
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/${mediaType}?with_genres=${genreCode}&api_key=${API_KEY}`
    );
    const genre = await response.json();

    //filter out movies missing either an overview or backdrop
    const filteredResults =  genre.results.filter(movie => {
      if(movie.overview === "" || movie.poster_path == null){
        return false
      }
      return true

    })

    setGenre(filteredResults)
  }
  function handleSubmit(e){
    e.preventDefault()

    getUserSearch(searchRef.current.value)

    navigate(`/search/${searchRef.current.value}`)

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

  async function getTrending(mediaType, setMediaType){
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${API_KEY}`
    );
    const nowTrending = await response.json();

    setMediaType(nowTrending.results)
  }

    //used to get information on a user clicked movie 
    async function getInfo(movieID,mediaType){
      const response = await fetch(
        `https://api.themoviedb.org/3//${mediaType}/${movieID}?&api_key=${API_KEY}`
      );
      const movie = await response.json();
    
      setFocusedMovie(movie)
    }

  // adds or removes movies from favorites
  const favorite = (movie) => {
    const inFavs = favorites.some(fav => fav.id === movie.id)
    let newFavs

    if(!inFavs){
      newFavs = [...favorites]
        newFavs.push(movie)
  
        setFavorites(newFavs)
    }
    else{
         newFavs = favorites.filter( fav => fav.id !== movie.id)
  
      setFavorites(newFavs)
    }
  }

  // checks to see if a movie is favorited. This is used to decide bookmark style
  const isFavorite = (movie) => {
    const inFavorites = favorites.some( fav => fav.id === movie.id)
    return inFavorites
  }

  return (
      <div className="container">
        <Nav />
        <main>
          <Searchbar handleSubmit={handleSubmit} searchRef={searchRef} />
          <Routes>
            <Route path="/" element={ <Home trending={trending} getInfo={getInfo} action={action} western={western} comedy={comedy} animation={animation} romance={romance} drama={drama} fantasy={fantasy} favorite={favorite} isFavorite={isFavorite} mediaType="movie" /> } />
            <Route path="/search/:movieName" element={<Results moviesToDisplay={moviesToDisplay} getInfo={getInfo} favorite={favorite} isFavorite={isFavorite} /> } />
            <Route path="/info/:movieID" element={ <MovieInfo movie={focusedMovie} /> } />
            <Route path="/bookmarks" element={<Results moviesToDisplay={favorites} getInfo={getInfo} favorite={favorite} isFavorite={isFavorite} /> } />
            <Route path="/tv" element={ <Tv trendingTV={trendingTV} getInfo={getInfo} actionTV={actionTV} westernTV={westernTV} comedyTV={comedyTV} animationTV={animationTV} romanceTV={romanceTV} dramaTV={dramaTV} favorite={favorite} isFavorite={isFavorite} /> } />
          </Routes>
        </main>
        <footer>
          <p>Powered</p>
          <img className="TMDBLogo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="TMDB logo" />
        </footer>
      </div>
  );
}

export default App;
