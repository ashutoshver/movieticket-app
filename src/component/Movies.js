import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './movies.css'
import { Link } from 'react-router-dom';


const Movies = () => {
  const [users, setUsers] = useState([]);


  const getUsers = async () => {
    const response = await axios.get(
      'https://api.tvmaze.com/search/shows?q=all'
    );

    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='flex'>
      {users.map((user, i) => {
        console.log(user)
        return (
          <Link to={`/details/${user.show.id}`} state={user.show}>
            <div className='movie-container' key={i}>
              <img src={user.show.image?.medium} alt='' />
              <p>{user.show.name}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )

}

export default Movies;

