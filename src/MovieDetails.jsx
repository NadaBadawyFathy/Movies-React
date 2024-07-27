import React from 'react';
import { useLocation } from 'react-router-dom';

function MovieDetails() {
    const location = useLocation();
    const { title, overview, poster_path } = location.state;

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 p-3 text-white" style={{backgroundColor:"#333"}}>
            <div className="d-flex flex-md-row flex-column align-items-center gap-4">
                <img style={{maxWidth:"300px", borderRadius:"10px"}} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                <div style={{maxWidth:"500px"}}>
                    <h5 className='mb-2' style={{fontSize:"32px"}}>{title}</h5>
                    <p style={{fontSize:"19.5px"}}>{overview}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
