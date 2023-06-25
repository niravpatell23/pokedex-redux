import {combineReducers} from 'redux';
import trainerReducer from './trainerReducer';

// import userReducer from './userReducer';
const rootReducer = combineReducers({
  trainers: trainerReducer
//   users: userReducer
});

export default rootReducer;