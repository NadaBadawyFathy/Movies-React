import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-container p-0 m-0 vh-100 d-flex justify-content-center align-items-center flex-column text-center"
        style={{backgroundColor:"#f0f0f0"}}>
            <h1 className='mb-3'>Welcome to the Movies Website</h1>
            <Link to="movies" className="movies-link">
                <button className='btn btn-primary'>View Movies</button>
            </Link>
        </div>
    );
}

export default Home;
