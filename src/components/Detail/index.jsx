import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { initial, modal } from '../../redux/actions/ShopAction';
import { favorites } from '../../redux/actions/buscadorAction';
import Modal from '../Modal';
import './style.css';

const Detail = () => {

  const movie_shop = useSelector((state) => state.movie_shop);
  const like = useSelector((state) => state.like);
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(modal(true));
    dispatch(favorites(e))
  }

  let value = [];

  const validate = (e) => {
    value = like.filter(data => data.imdbID === e.imdbID);
    console.log(value);
    if (value.length !== 0) {
      alert('This movie is already in favorites');
    } else (
      send(e)
    )
  }

  return (
    <>
      {
        movie_shop.modal === true && <Modal/>
      }
      {
        movie_shop.movie === undefined ? <Loading/> :
        <div className='container mt-5 mb-5'>
          <div className='row'>
            <div className='col-12 col-md-6 col-xl-4 text-center figure d-block'>
              <img src={movie_shop.movie.Poster} alt={movie_shop.movie.Title}/>
              <div className='d-block'>
                <Link className='btn btn-primary mt-3' onClick={() => dispatch(initial(movie_shop.name))} to='/'>Return</Link>
                <div>
                  <button className='btn btn-primary mt-3' onClick={() => validate(movie_shop.movie)}>Add to Favorites</button>
                </div>
              </div>
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