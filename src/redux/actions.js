import { FETCH_REQUEST, FETCH_RESPONSE, FETCH_FAILURE, SET_CURRENT_MAIL, SET_SEARCH_RESULT } from './constants'
import axios from 'axios';

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  }
}

export const fetchResponse = (mails) => {
  return {
    type: FETCH_RESPONSE,
    payload: mails
  }
}

export const fetchFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: error
  }
}

export const setCurrentMail = (mail) => {
  return {
    type: SET_CURRENT_MAIL,
    payload: mail,
  }
}


export const setSearchResult = ( searchResult ) => {
  return {
    type: SET_SEARCH_RESULT,
    payload: searchResult
  }
}

// https://jsonplaceholder.typicode.com/users

export const fetchMailApi = () => {
  return (dispatch) => {
    dispatch(fetchRequest)
    axios.get('https://run.mocky.io/v3/58770279-0738-4578-a1cf-c56a193fce98')
      .then(response => {
        const mails = response.data;
        dispatch(fetchResponse(mails));
      })
      .catch(error => {
        const err = error.message
        dispatch(fetchFailure(err));
      })
  }
}