import React from 'react';
import { useDispatch } from 'react-redux';
import { remove_favorites } from '../../redux/actions/buscadorAction';
import './style.css';

const Movie = (props) => {

  const { title, img, id } = props;
  const dispatch = useDispatch();

  return (
    <div className='container mb-3'>
      <div className='row text-center'>
        <div className="col-6">
          <img style={{width: '150px'}} src={img} alt={title}/> 
        </div>
        <div className="col-6 text-left button">
          <div className='delete'>
            <button type='button' className='btn btn-primary' onClick={() => dispatch(remove_favorites(id))}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;