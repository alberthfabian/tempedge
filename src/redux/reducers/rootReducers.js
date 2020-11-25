import { combineReducers } from 'redux';
import movie_shop from './ShopReducer';
import like from './buscadorReducer';

const rootReducers = combineReducers({
  movie_shop,
  like
});

export default rootReducers;