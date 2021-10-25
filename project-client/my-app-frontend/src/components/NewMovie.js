import React from 'react';

function NewMovie({formData, onAddMovie}) {


    function handleSubmit(e) {
        e.preventDefault();

    
        fetch("http://localhost:9292/movies", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({formData})
        })
        // .then((r) => r.json())
        // .then((newMovie) => {
        //     onAddMovie(newMovie);
        //     setContent('');
        // })
    }

  

    return(
        <div>
            <h1>Add Movie</h1>
            <form
                onSubmit={handleSubmit}>
                    <label>Title:
                        <input
                        type='text'
                        id='title'
                        value={formData.title}
                        onChange={onAddMovie}
                        ></input>
                        </label>
                    {/* <label>Genre:
                        <input 
                        type='text'
                        id='genre'
                        value={formData.genre}
                        onChange={onAddMovie}
                        />
                    </label> */}
                    <label>Quote:
                        <input 
                        type='text'
                        id='quote'
                        value={formData.quote}
                        onChange={onAddMovie}
                        />
                    </label>
                    <label>Rating:
                        <input 
                        type='text'
                        id='rating'
                        value={formData.rating}
                        onChange={onAddMovie}
                        />
                    </label>
                    <button type='submit'>Add Movie</button>

            </form>

        </div>
    )
}

export default NewMovie;