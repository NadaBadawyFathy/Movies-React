import React from 'react'
import { Link } from 'react-router-dom';

function MoviesCard(props) {
    let {title,overview,poster_path} = props.movie;
    return (
        <div className="border border-light p-2 position-relative text-white" style={{backgroundColor:"#333"}}>
            <img className='w-100 rounded' src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
            <h5 className='mt-2 mb-2'>{title}</h5>
            <p >{overview}</p>
            <Link to="/details" state={{title,overview,poster_path}}>
                <button className="btn btn-info rounded-0 position-absolute fixed-bottom ">View Details</button>
            </Link>
        </div>
    )
}

export default MoviesCard
