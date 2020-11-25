import { combineReducers } from 'redux';
import movie_shop from './gameShopReducer';
import buscador from './buscadorReducer';

const rootReducers = combineReducers({
  movie_shop,
  buscador
});

export default rootReducers;