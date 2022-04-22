
import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import NewMovie from './NewMovie';
import GenreList from './GenreList';


function App() {

  const [movies, setMovies] = useState([]);
  // const [movieData, setMovieData] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:9292/movies")
    .then((r) => r.json())
    .then((movies) => {
      console.log(movies)
      setMovies(movies)
      // setMovieData(movies)
    });
   
  }, []);

  function handleAddMovie(newMovie) {
    setMovies([...movies, newMovie])
  }

  function handleDeleteMovie(id) {
    const updatedMovies = movies.filter((movie) => movie.id !== id)
    setMovies(updatedMovies);
  }

  function handleUpdateMovie(updatedMovie) {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === updatedMovie.id) {
        return updatedMovie;
      } else {
        return movie;
      }
    });
    setMovies(updatedMovies)
  }



  return (
    <div>
      <MovieList 
      movies={movies}
      onMovieDelete={handleDeleteMovie}
      onUpdateMovie={handleUpdateMovie}
      />
      <NewMovie onAddMovie={handleAddMovie}/>
      <GenreList />



    </div>
  );
}

export default App;
