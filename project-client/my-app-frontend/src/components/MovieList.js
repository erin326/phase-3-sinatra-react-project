import React from 'react';
import Movie from './Movie';


function MovieList({movies}) {

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
                    />
                ))}
             
              
            </ul>

        </div>
    )
}

export default MovieList;