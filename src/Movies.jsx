import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MoviesCard from './MoviesCard';

function Movies() {
const [movies,Setmovies] = useState([]);

async function getMovies() {
    let {data} = await axios.get('https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=5b6d2f21c07b6b480b047d8a71c3824d');
    Setmovies(data.results);
}

useEffect(()=> {
    getMovies();
},[])

// console.log(movies)
return (
    <div>
        <h1 className='text-center bg-dark p-3 text-white m-0 border-bottom'>Movies</h1>
        <div className='d-grid gap-4 p-2 bg-dark pt-3' style={{gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))"}}>
        {
            (!movies.length)?(
                <h1>Loading....</h1>
            ):(
                movies.map((res,index) => (
                    <MoviesCard key={index} movie={res}></MoviesCard>
                ))
            )
        }
        </div>
    </div>
)
}

export default Movies;
