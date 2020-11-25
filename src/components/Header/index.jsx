/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import logo from '../../assets/media/Logo.png';
import FavoritesText from '../FavoritesText';

const Header = () => {

  return (
    <nav className="navbar navbar-light bg-primary mb-3">
      <Link className="navbar-brand" to='/'>
        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt='Logo' loading="lazy" />
        <span className='font-weight-bold text-white'>Temp</span><span className='text-white'>Edge</span> 
      </Link>
      <FavoritesText/>
      <Search/>
    </nav>
  );
}

export default Header;