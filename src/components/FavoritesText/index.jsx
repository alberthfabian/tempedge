import React from 'react';
import { Link } from 'react-router-dom';
import heart from '../../assets/media/Heart.png';

const FavoritesText = () => {
  return (
    <div className='favorites'>
        <Link className='link text-warning' style={{ textDecoration: 'none' }} to='/favorites'>
          <img className='mr-1' src={heart} style={{width: '20px'}} alt='Heart'/>
          Favorites
      </Link>
    </div>
  );
}

export default FavoritesText;