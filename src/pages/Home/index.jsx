import React from 'react';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import { useSelector } from 'react-redux';

const Header = () => {

  const movie_shop = useSelector((state) => state.movie_shop);

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        { movie_shop.search === undefined ? <Loading/> :
          movie_shop.search.map(data => (
            <Card key={data.imdbID} image={data.Poster} title={data.Title} id={data.imdbID} year={data.Year}/>
          ))
        }
      </div>
    </div>
  );
}

export default Header;