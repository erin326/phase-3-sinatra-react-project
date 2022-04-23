import React, {useEffect, useState} from 'react';
import Genre from './Genre';

function GenreList({movies}) {

    const [genre, setGenre] = useState([]);
    const [genres, setGenres] = useState([]);

    // function handleAddGenre(newGenre) {
    //     setGenres([...genres, newGenre])
    //   }

    function createGenre(e) {
        fetch(`http://localhost:9292/genres`, {
            method: "POST",
            headers: {
                "Accept": "application/json",

                "Content-Type": 'application/json'
            }, 
            body: JSON.stringify({title: genre})
            
        })
        .then((r) => r.json())
        .then((genre)=> {
            console.log((genre))
        
        })

    }
    useEffect(() =>  {
        fetch(`http://localhost:9292/genres`)
        .then((r) => r.json())
        .then((g) => setGenres(g))
    }, [])
    
    const displayGenres = genres.map((genre) => (
        <Genre key={genre.id} genre={genre}/>
    ))
    console.log(genres);

    return(
        <div>

            <span>
                Make up your own genre!
                <form type='submit'>
                    <input 
                    type='text'
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}

                    ></input>
                    <button onClick={createGenre} >Submit</button>
                    <h3 style={{flexDirection: 'column-reverse', textAlign:'center'}}>{displayGenres}</h3>

                </form>
            
            </span>


        </div>
    )
}

export default GenreList;