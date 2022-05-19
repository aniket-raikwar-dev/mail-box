import { combineReducers } from 'redux';
import mailReducer from './mailReducer';


const rootReducer = combineReducers({
  mail: mailReducer,
})

export default rootReducer;