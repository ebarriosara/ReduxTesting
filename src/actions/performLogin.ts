import { BaseAction } from "../common/redux/actionBase";
import { actionDefs } from "../common/const/actions";
import { doLogin } from "../api/login";
import { LoginCredentials } from "../api/model";
import { hashHistory } from "react-router";

export const performLoginRequestStart = (loginCredentials: LoginCredentials) => (dispatcher) => {
  const promise = doLogin(loginCredentials);
  return promise.then(result => dispatcher(performLoginCompleted(result)));
}

const performLoginCompleted = (successfulLogin: boolean): BaseAction => {
  (successfulLogin) ?
    hashHistory.push('student-list')
    :
    console.log('error login');

  return {
    type: actionDefs.PERFORM_LOGIN_COMPLETED,
    payload: successfulLogin,
  }
};