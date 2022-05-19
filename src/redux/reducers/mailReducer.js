import { FETCH_REQUEST, FETCH_RESPONSE, FETCH_FAILURE, SET_CURRENT_MAIL, SET_SEARCH_RESULT } from '../constants'


const initialState = {
  loading: false,
  mail: [],
  error: "",
  currentMail: {},
  searchResult: []
}

const mailReducer = (state = initialState, action) => {

   switch(action.type) {

    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case FETCH_RESPONSE:
      return {
        loading: false,
        mail: action.payload,
        error: "",
        currentMail: ""
      }

    case FETCH_FAILURE:
      return {
        loading: false,
        mail: [],
        error: action.payload,
        currentMail: ""
      }

    case SET_CURRENT_MAIL: {
      return {
        ...state,
        currentMail: action.payload
      }
    }

    case SET_SEARCH_RESULT:
      {
        return {
          ...state,
          searchResult: action.payload
        }
      }


    default: return state;

   }
}


export default mailReducer;