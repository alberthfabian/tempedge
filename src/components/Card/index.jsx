/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react';
import { Link } from 'react-router-dom';
// import { useServer } from '../../context';
// import { connect } from 'react-redux';
import { watch_movie, initial, return_pokemon_action } from '../../redux/actions/ShopAction';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { initial } from '../../redux/actions/ShopAction';
import './style.css';

const Card = (props) => {

  const { image, title, id, year } = props;
  // const { page } = useServer();

  const movie_shop = useSelector((state) => state.movie_shop);
  const dispatch = useDispatch();

  // const generator = (e) => {
  //   dispatch(watch_movie(e));
  //   dispatch(initial('superman'));
  // }

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

// const mapStateToProps = (state) => {
//   return {
//     movie_shop: state.movie_shop
//   }
// }

// const mapDispatchToProps = {
//   buy_pokemon_action,
//   return_pokemon_action
// };

export default Card;
// export default connect(mapStateToProps, mapDispatchToProps)(Card);