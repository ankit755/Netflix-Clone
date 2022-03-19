import React, {useState, useEffect} from 'react';
import axios  from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function ROW({title, fetchURL, isLargeRow}) {

    const [movies, setMovies] = useState([]);

        // A snippet of codE ewhich runs based on a specific condition
        useEffect(()=>{
            async function fetchData(){
                const request = await axios.get(fetchURL);
                setMovies(request.data.results); 
                return request;
            }
            fetchData();
        }, [fetchURL]); // we hav e to tell useEffect to rerender after chang eof fetchurl
        // if [], run once when the code loads and don't run again
       
       // console.log(movies);

  return (
    <div className='row'>
      
        <h2>{title}</h2>

        <div className='row_posters'>
            {movies.map(movie =>(
                <img 
                key={movie.id}

                 //if any row isLargeRow then it will get another class "row_posterLarge"

                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}
                alt={movie.name} /> 
            ))}
        </div> 
    </div>
  )
}

export default ROW