import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
// import { useServer } from '../../context';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { initial } from '../../redux/actions/ShopAction';

const Detail = () => {

  // const { movie } = useServer();
  const movie_shop = useSelector((state) => state.movie_shop);
  const dispatch = useDispatch();

  return (
    <>
      {
        movie_shop.movie === undefined ? <Loading/> :
        <div className='container mt-5 mb-5'>
          <div className='row'>
            <div className='col-12 col-md-6 col-xl-4 text-center'>
              <img src={movie_shop.movie.Poster} alt={movie_shop.movie.Title}/>
              <Link className='btn btn-primary mt-3' onClick={() => dispatch(initial(movie_shop.name))} to='/'>Return</Link>
            </div>
            <div className='col-12 col-md-6 col-xl-8'>
              <h1 className='text-center text-sm-left'>{movie_shop.movie.Title}</h1>
              <h4>Synopsis</h4>
              <p>{movie_shop.movie.Plot}</p>
              <p><span className='font-weight-bold'>Director: </span>{movie_shop.movie.Director}</p>
              <p><span className='font-weight-bold'>Year: </span>{movie_shop.movie.Year}</p>
              <p><span className='font-weight-bold'>Released: </span>{movie_shop.movie.Released}</p>
              <p><span className='font-weight-bold'>Tipo: </span>{movie_shop.movie.Genre}</p>
              <p><span className='font-weight-bold'>Duration: </span>{movie_shop.movie.Runtime}</p>
              <p><span className='font-weight-bold'>Actors: </span>{movie_shop.movie.Actors}</p>
              <p><span className='font-weight-bold'>Language: </span>{movie_shop.movie.Language}</p>
              <p><span className='font-weight-bold'>Country: </span>{movie_shop.movie.Country}</p>
              <p><span className='font-weight-bold'>Awards: </span>{movie_shop.movie.Awards}</p>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Detail;