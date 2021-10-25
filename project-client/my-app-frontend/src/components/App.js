
import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import NewMovie from './NewMovie';


function App() {

  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    quote: '',
    rating: ''
});

  useEffect(() => {
    fetch("http://localhost:9292/movies")
    .then((r) => r.json())
    .then((movies) => setMovies(movies));
  }, []);

  function handleAddMovie(e) {
    setFormData({
      ...formData, [e.target.id]: e.target.value
    });
    // setMovies([...movies, e])

  }


  return (
    <div>
      <MovieList 
      movies={movies}
      />
      <NewMovie formData={formData} onAddMovie={handleAddMovie} />



    </div>
  );
}

export default App;
