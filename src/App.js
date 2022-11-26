import "./App.css";
import { Nav } from "./components/Nav";
import { Searchbar } from "./components/Searchbar";
import { Results } from "./components/Results";

import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import { Carousel } from "./components/Carousel";

// import { Routes, Route } from "react-router-dom";


const API_KEY = "2fa9b8c3457255630ef48d6faeab6c29";


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

  // used when fetching movie categories
  const [ action, setAction ] = useState([])
  const [ comedy, setComedy ] = useState([])
  const [ western, setWestern ] = useState([])
  const [ fantasy, setFantasy ] = useState([])
  const [ animation, setAnimation ] = useState([])
  const [ romance, setRomance ] = useState([])
  const [ drama, setDrama ] = useState([])

  useEffect( () => { 
    getTrending()
    getGenre(36,setAction)
    getGenre(35,setComedy)
    getGenre(37,setWestern)
    getGenre(14,setFantasy)
    getGenre(36,setAnimation)
    getGenre(10749,setRomance)
    getGenre(18,setDrama)
  },[])

  // takes a genre code then sets state for that genre
  async function getGenre(genreCode,setGenre){
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
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genreCode}&api_key=${API_KEY}`
    );
    const genre = await response.json();

    setGenre(genre.results)
  }

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
      <Nav />
      <main>
        <Searchbar handleSubmit={handleSubmit} searchRef={searchRef} />
        <Carousel genre={"Trending"} genreMovies={trending} displayPlay={displayPlay} hidePlay={hidePlay} />
        <Results displayPlay={displayPlay} hidePlay={hidePlay} moviesToDisplay={moviesToDisplay} />

        {/* Possibly stick these under landing page component ? */}
        <Carousel genre={"Action"} genreMovies={action} displayPlay={displayPlay} hidePlay={hidePlay} />
        <Carousel genre={"Western"} genreMovies={western} displayPlay={displayPlay} hidePlay={hidePlay} />
        <Carousel genre={"Comedy"} genreMovies={comedy} displayPlay={displayPlay} hidePlay={hidePlay} />
        <Carousel genre={"Animation"} genreMovies={animation} displayPlay={displayPlay} hidePlay={hidePlay} />
        <Carousel genre={"Romance"} genreMovies={romance} displayPlay={displayPlay} hidePlay={hidePlay} />
        <Carousel genre={"Drama"} genreMovies={drama} displayPlay={displayPlay} hidePlay={hidePlay} />
        <Carousel genre={"Fantasy"} genreMovies={fantasy} displayPlay={displayPlay} hidePlay={hidePlay} />

      </main>
    </div>
  );
}

export default App;
