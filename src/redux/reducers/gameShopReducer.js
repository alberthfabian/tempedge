// import FetchData from '../../components/Fetch';

const { WATCH_MOVIE } = require("../actions/ShopAction");
const { RETURN_POKEMON } = require("../actions/ShopAction");
const { INITIAL } = require("../actions/ShopAction");


const movie_shop = (state = [], action) => {
  switch(action.type) {
    case INITIAL: {
      return {
        ...state,
        search: action.payload,
        name: action.name
      }
    }
    case WATCH_MOVIE: { 
      return {
        ...state,
        movie: action.payload
      }
    }
    case RETURN_POKEMON: {
      return {
        ...state,
        pokemon: state.pokemon + action.payload
      }
    }
    default: return state;
  }
}

export default movie_shop;