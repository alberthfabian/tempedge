/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react';
import { Link } from 'react-router-dom';
import { watch_movie } from '../../redux/actions/ShopAction';
import { useDispatch } from 'react-redux';
import './style.css';

const Card = (props) => {

  const { image, title, id, year } = props;

  const dispatch = useDispatch();

  return (
    <div className="card col-8 col-sm-5 col-md-4 col-lg-3 m-1">

      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{year}</p>
        <Link className="btn btn-primary" onClick={() => dispatch(watch_movie(id))} to={`/movie/${id}`}>See more</Link>
      </div>
    </div>
  );
}

export default Card;
