import "./App.css";
import { Nav } from "./components/Nav";
import { Searchbar } from "./components/Searchbar";
import { Trending } from "./components/Trending";
import { Recommended } from "./components/Recommended";

import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

// import { Routes, Route } from "react-router-dom";


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
      <Nav />
      <main>
        <Searchbar handleSubmit={handleSubmit} searchRef={searchRef} />
        <Trending trending={trending} displayPlay={displayPlay} hidePlay={hidePlay} />
        <Recommended displayPlay={displayPlay} hidePlay={hidePlay} moviesToDisplay={moviesToDisplay} />
      </main>
    </div>
  );
}

export default App;
