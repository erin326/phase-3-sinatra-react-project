import React, { useState } from 'react';
import Movie from './Movie';




function MovieList({movies, onMovieDelete, onUpdateMovie }) {

    return(
        <div>
            <ul>
                {movies.map((movie) => (
                    <Movie 
                    key={movie.id}
                    movie={movie}
                    title={movie.title}
                    quote={movie.quote}
                    rating={movie.rating}
                    onMovieDelete={onMovieDelete}
                    onUpdateMovie={onUpdateMovie}
                    // genre={movie.genre.name}
                    />
                ))}
             
              
            </ul>

        </div>
    )
}

export default MovieList;