import React from 'react';

function Genre({movies}) {
    const {id, genre} = genre

    return(
        <div>
            <span>
                {movies.map((movie) => (
                    <Genre 
                    key={movie.title}
                    genre={movie.genre.name}
                    />
                ))}
            </span>


        </div>
    )
}

export default Genre;