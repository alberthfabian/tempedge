const { WATCH_MOVIE } = require("../actions/ShopAction");
const { MODAL } = require("../actions/ShopAction");
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
    case MODAL: {
      return {
        ...state,
        modal: action.payload
      }
    }
    default: return state;
  }
}

export default movie_shop;