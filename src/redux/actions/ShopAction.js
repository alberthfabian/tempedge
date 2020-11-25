import axios from 'axios';

export const WATCH_MOVIE = 'WATCH_MOVIE';
export const RETURN_POKEMON = 'RETURN_POKEMON';
export const INITIAL = 'INITIAL';
export const MODAL = 'MODAL';
export const FAVORITES = 'FAVORITES';

export const initial = (name) => {
  return dispatch => {
    return axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=b64a56c4&s=${name}`)
    .then(response => {
      dispatch({
        type: 'INITIAL',
        payload: response.data.Search,
        name
      })
    });
  };
}

export const watch_movie = (id) => {
  return dispatch => {
    return axios.get(`https://www.omdbapi.com/?i=${id}&apikey=b64a56c4`)
    .then(response => {
      dispatch({
        type: 'WATCH_MOVIE',
        payload: response.data
      })
    });
  };
}

export const modal = (value) => {
  return {
    type: MODAL,
    payload: value
  }
}