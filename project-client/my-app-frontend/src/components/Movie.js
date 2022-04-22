import React, { useState, useEffect } from 'react';
import EditMovie from './EditMovie';

function Movie({  movie, onMovieDelete, onUpdateMovie }) {
    
    const {id, title, quote, rating } = movie 
//   const movieGenre = movie.genre;

    const [isUpdating, setIsUpdating] = useState(false);
    const [genre, setGenre] = useState('')

  useEffect(() => {
        fetch(`http://localhost:9292/movies/${id}`)
        .then((r) => r.json())
        .then((genre) => setGenre(genre.title))
    }, [])

    function handleDelete() {
        fetch(`http://localhost:9292/movies/${id}`, {
            method: "DELETE",
        });
        onMovieDelete(id);
    }

    function handleUpdate(updatedMovie) {
        setIsUpdating(false);
        onUpdateMovie(updatedMovie);
    }

    return(
        <div>
            <li>
            {isUpdating ? (
                    <EditMovie 
                    id={id}
                    title={title}
                    quote={quote}
                    rating={rating}
                    onUpdateMovie={handleUpdate}
                    />
                ) : (
                    <div>
                        <span><strong>{title} </strong></span>
                        <span> <em>quote:</em> "{quote}" </span>
                        <span ><em>rating:</em> {rating} </span>
                        <span> genre: {genre}</span>
                    </div>
                )}

                <div>
                     <button onClick={() => setIsUpdating((isUpdating) => !isUpdating)}>
                         <span role='img'
                         aria-label='edit'>
                            ✏️ 
                         </span>
                     </button>
                <button onClick={handleDelete}>
                    <span role="img" aria-label="delete">🗑</span>
                </button>
                
                </div>   
                
            </li>
         

        </div>
    )
}

export default Movie;