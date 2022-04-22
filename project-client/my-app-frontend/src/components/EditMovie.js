import React, {useState} from 'react';

function EditMovie({id, title, quote, rating, onUpdateMovie }) {

    const [movieTitle, setMovieTitle] = useState(title);
    const [movieQuote, setMovieQuote] = useState(quote);
    const[movieRating, setMovieRating] = useState(rating);

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:9292/movies/${id}`, {
            method: "PATCH",
            headers : {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: movieTitle,
                quote: movieQuote,
                rating: movieRating,
            }),
        })
        .then((r) => r.json())
        .then((updatedMovie)=> onUpdateMovie(updatedMovie));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={movieTitle}
            onChange={e => setMovieTitle(e.target.value)}
            >
            </input>
            <input
            type='text'
            value={movieQuote}
            onChange={e => setMovieQuote(e.target.value)}
            >
            </input>  
            <input
            type='text'
            value={movieRating}
            onChange={e => setMovieRating(e.target.value)}
            >
            </input>
            <input 
            type='submit'
            value="Save">
            </input>
        </form>

    )
}

export default EditMovie;