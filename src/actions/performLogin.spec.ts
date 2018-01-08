import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { BaseAction } from "../common/redux/actionBase";
import { actionDefs } from "../common/const/actions";
import { LoginCredentials } from "../api/model";
import { SinonStatic } from 'sinon';
import { doLogin } from '../api/login';
import { performLoginRequestStart } from './performLogin';

const middlewares = [ReduxThunk];

const mockStore = configureStore(middlewares);

describe('performLoginCompleted action', () => {

  it('should return a promise, and this promise dispatches doLogin action that returns the expected action for wrong credentials', () => {

    // Arrange
    const loginInfo: LoginCredentials = {
      user: 'login',
      password: 'password',
    };
    const expectedResult = false;

    const expectedAction: BaseAction = {
      type: actionDefs.PERFORM_LOGIN_COMPLETED,
      payload: expectedResult,
    };

    // Act
    const store = mockStore([]);
    store.dispatch(performLoginRequestStart(loginInfo))
      .then(() => {
        expect(store.getActions()[0]['type']).to.be.equal(expectedAction.type);
        expect(store.getActions()[0]['payload']).to.be.equal(expectedAction.payload);
      })
      .catch((error) => console.log(`Error in test: ${error.message}`));
  });

  it('should return a promise, and this promise dispatches doLogin action that returns the expected action for right credentials', () => {
    
    // Arrange
    const loginInfo: LoginCredentials = {
      user: 'user',
      password: 'test',
    };
    const expectedResult = true;

    const expectedAction: BaseAction = {
      type: actionDefs.PERFORM_LOGIN_COMPLETED,
      payload: expectedResult,
    };

    // Act
    const store = mockStore([]);
    store.dispatch(performLoginRequestStart(loginInfo))
      .then(() => {
        expect(store.getActions()[0]['type']).to.be.equal(expectedAction.type);
        expect(store.getActions()[0]['payload']).to.be.equal(expectedAction.payload);
      })
      .catch((error) => console.log(`Error in test: ${error.message}`));
  });

});