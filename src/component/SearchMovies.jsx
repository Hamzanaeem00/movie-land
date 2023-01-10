import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import '../App.css'
import MovieCard from "./MovieCard";
import searchIcon from '../Assets/search.svg'

const SearchMovies = () => {
    const [movies, setMovies]= useState([])
  const [search, SetSearch]= useState('')

  // aa82c0d0

  const API_URL = 'http://www.omdbapi.com?apikey=aa82c0d0';

  const searchMovies =  async (title)=>{
const response = await fetch(`${API_URL}&s=${title}`)
const data = await response.json()
console.log("Search Movie Data===>",data.Search);
setMovies(data.Search)
  }

  
  useEffect(()=>{
      searchMovies('SuperMan')
  },[])
  return (
    <div className="app">
   <h1>Movie Land</h1>
   <div className="search">
    <input type="text" placeholder="Search for movies"  value={search} onChange={(e)=>SetSearch(e.target.value)}/>
    <img src={searchIcon} alt="search" 
    onClick={()=> searchMovies(search)}/>
   </div>
{movies.length > 0?(
   <div className="container">
    {movies.map((movie)=> {
      return(
        // <div>{item.Title}</div>
        <div>
          <MovieCard movie = {movie} />
        </div>
      )
    })}
   </div>
):(
  <div className="empty">
    <h2>No Movies Found</h2>
  </div>
)
}

    </div>
  )
}

export default SearchMovies