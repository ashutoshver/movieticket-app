import React from 'react'
import './moviedetails.css'
import { Link, useLocation } from 'react-router-dom'


const MovieDetails = () => {
    const location = useLocation();
    const linkData = location.state;
    return (
        <div className='details'>
            <div className='movie-details'>
                <h1>Book Movie Ticket</h1>
                <div className='big-image'>
                    <img src={linkData.image?.original} alt="" />
                </div>
                <div className='detail'>
                    <h1>Movie Name: <span>{linkData.name}</span></h1>
                    <p><span>Genres: </span> {linkData.genres}</p>
                    <h3>Summary:</h3>
                    <p className='summary'>{linkData.summary}</p>
                    <p><span>Language: </span>{linkData.language}</p>
                    <p><span>Ratings: </span>{linkData.rating.average}</p>
                </div>

                <div className='btn'>
                    <Link to={`/form/${linkData.id}`} state={linkData.name}>
                        <button>Book Now</button>
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default MovieDetails