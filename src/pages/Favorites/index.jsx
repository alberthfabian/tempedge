import React from 'react';
import Movie from '../../components/Movie';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Favorites = () => {

  const like = useSelector((state) => state.like);

  return (
    <>
      <div className='mt-3 mb-3 container'>
        <Link to='/' type='button' className='btn btn-primary'>Return</Link>
      </div>
      {
        like.length === 0 ? <p className='text-center mt-5 mb-5'>You don't have any favorites yet, when you add them they'll be listed here</p> : 
        <>
          {
            like.map(data => (
              <Movie key={data.imdbID} title={data.Title} img={data.Poster} id={data.imdbID}/>
            ))
          }
        </>
      }
    </>
  );
}

export default Favorites