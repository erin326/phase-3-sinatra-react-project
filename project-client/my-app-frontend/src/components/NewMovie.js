import React, { useState } from 'react';
// import {useHistory} from 'react-router-dom';

function NewMovie({ onAddMovie }) {


    // const history = useHistory()
    // const [formData, setFormData] = useState({
    //     title: '',
    //     genre: '',
    //     quote: '',
    //     rating: ''
    // });

    const [title, setTitle] = useState("");
    const [genreName, setGenreName] = useState("");
    const [quote, setQuote] = useState("");
    const [rating, setRating] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:9292/movies", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title, 
                genre_name: genreName,
                quote, 
                rating
            }),
        })
        .then((r) => r.json())
        .then((movie) => {
            console.log(movie)
            onAddMovie(movie);
            setGenreName(genreName)
        });
    
    }
    
    

    return (
        <div>
            <h1>Add Movie</h1>
        <form
            onSubmit={handleSubmit}>
                <label>Title:
                    <input
                    type='text'
                    id='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    ></input>
                    </label>
                <label>Genre:
                    <input 
                    type='text'
                    id='genre'
                    value={genreName}
                    onChange={e => setGenreName(e.target.value)}
                    />
                </label>
                <label>Quote:
                    <input 
                    type='text'
                    id='quote'
                    value={quote}
                    onChange={e => setQuote(e.target.value)}
                    />
                </label>
                <label>Rating:
                    <input 
                    type='number'
                    id='rating'
                    value={rating}
                    onChange={e => setRating(e.target.value)}
                    />
                </label>
                <button type='submit'>Add Movie</button>

        </form>
            

        </div>
    )
    
    
}

export default NewMovie;


// function handleSubmit(e) {
//     e.preventDefault();






// return(
//     <div>


//     </div>