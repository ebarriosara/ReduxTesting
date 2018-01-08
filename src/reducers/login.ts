import { LoginCredentials } from '../api/model';
import { BaseAction } from '../common/redux/actionBase';
import { actionDefs } from '../common/const/actions';
import { FieldInfo } from '../common/entities/fieldInfo';

export type LoginReducerState = LoginCredentials;

const defaultState : LoginReducerState = {
  user: '',
  password: '',
};

export const loginReducer = (state = defaultState, 
                              action : BaseAction) : LoginReducerState => {
  switch (action.type) {
    case actionDefs.UPDATE_LOGIN_CREDENTIALS:
      return handleUpdateLoginCredentials(state, action.payload);
  }
  return state;
}

const handleUpdateLoginCredentials = (state : LoginReducerState, loginCredentials : LoginCredentials) : LoginReducerState => {
  return loginCredentials;
};