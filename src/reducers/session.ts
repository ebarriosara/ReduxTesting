import { LoginCredentials } from "../api/model";
import { BaseAction } from "../common/redux/actionBase";
import { actionDefs } from "../common/const/actions";
import { hashHistory } from "react-router";

export interface SessionReducerState extends LoginCredentials {
  isLoggedIn: boolean;
}

const defaultState: SessionReducerState = {
  user: '',
  password: '',
  isLoggedIn: false,
}

export const sessionReducer = (sessionReducerState = defaultState, action: BaseAction): SessionReducerState => {
  switch (action.type) {
    case actionDefs.PERFORM_LOGIN_COMPLETED:
      return handlePerformLoginCompleted(sessionReducerState, action.payload);
  }

  return sessionReducerState;
}

const handlePerformLoginCompleted = (sessionReducerState: SessionReducerState, successfulLogin: boolean): SessionReducerState => {
  return {
    ...sessionReducerState,
    isLoggedIn: successfulLogin,
  }
};