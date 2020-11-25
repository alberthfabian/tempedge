import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import fetchPokemon from '../../redux/actions/buscadorAction';
import { initial } from '../../redux/actions/ShopAction';
import { Link } from 'react-router-dom';;

const Search = () => {

  const dispatch = useDispatch();
  const [ name, setName ] = useState('mewTwo');

  return (
    <div className='form-group d-flex align-items-center mb-0'>
      <label htmlFor='buscar_pokemon' className='text-white mb-0 mr-3'>Search</label>
      <input type='text' className='form-control' id='buscar_pokemon'
      onChange={
        (event) => {
          setName(event.target.value);
        }
      }/>
      <Link to='/'>
        <button className='btn btn-warning text-white' onClick={() => {
          dispatch(initial(name))
        }}>Enviar</button>
      </Link>
    </div>
  );
}

export default Search;