import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const FavoritesText = () => {
  return (
    <div className='favorites'>
        <Link className='link text-warning' style={{ textDecoration: 'none' }} to='/favorites'>Favorites
      </Link>
    </div>
  );
}

export default FavoritesText;