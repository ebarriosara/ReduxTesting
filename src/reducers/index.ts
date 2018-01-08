import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loginReducer, LoginReducerState } from './login';
import { RouterState } from 'react-router';
import { SessionReducerState, sessionReducer } from './session';

export interface AppState {
  routing : RouterState;
  loginReducer : LoginReducerState;
  sessionReducer : SessionReducerState;
}

export const reducers =  combineReducers({
  routing: routerReducer,
  loginReducer,
  sessionReducer,
});
