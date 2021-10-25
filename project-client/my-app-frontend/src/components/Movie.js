import React from 'react';

function Movie({ movie }) {
    
    const {id, title, quote, rating } = movie 
    // const genre = movie.genre.name

    return(
        <div>
            <li>
                <span><strong>{title} </strong></span>
                {/* <span> <em>genre:</em> {genre} </span> */}
                <span> <em>quote:</em> "{quote}" </span>
                <span ><em>rating:</em> {rating} </span>
                
            </li>

        </div>
    )
}

export default Movie;