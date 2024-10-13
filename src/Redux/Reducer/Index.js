import { combineReducers } from 'redux';
import AuthReducer from './Auth.Reducer';



const reducers = combineReducers({
    Auth: AuthReducer,
});

export default reducers;
