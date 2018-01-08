import { BaseAction } from "../common/redux/actionBase";
import { SessionReducerState, sessionReducer } from "./session";
import { actionDefs } from "../common/const/actions";
const deepFreeze = require('deep-freeze');

describe('sessionReducer', () => {

  it('returns a default state', () => {

    // Arrange
    const myAction: BaseAction = {
      type: 'dummytype',
      payload: null,
    };

    const expectedDefault: SessionReducerState = {
      user: '',
      password: '',
      isLoggedIn: false,
    };

    // Act
    const result = sessionReducer(undefined, myAction);

    // Assert
    expect(result).to.be.deep.equals(expectedDefault);

  });

  it('action PERFORM_LOGIN_COMPLETED updating is logged in field should update reducer isLoggedIn using wrong credentials', () => {
    // Arrange
    const myAction: BaseAction = {
      type: actionDefs.PERFORM_LOGIN_COMPLETED,
      payload: false,
    };

    const initialState: SessionReducerState = {
      user: 'John',
      password: '1234',
      isLoggedIn: undefined,
    }

    const expectedResult: SessionReducerState = {
      user: 'John',
      password: '1234',
      isLoggedIn: false,
    };

    // Act
    deepFreeze(initialState);
    const result = sessionReducer(initialState, myAction);

    // Assert
    expect(result).to.be.deep.equals(expectedResult);

  });

  it('action PERFORM_LOGIN_COMPLETED updating is logged in field should update reducer isLoggedIn using right credentials', () => {
    // Arrange
    const myAction: BaseAction = {
      type: actionDefs.PERFORM_LOGIN_COMPLETED,
      payload: true,
    };

    const initialState: SessionReducerState = {
      user: 'test',
      password: 'pass',
      isLoggedIn: undefined,
    }

    const expectedResult: SessionReducerState = {
      user: 'test',
      password: 'pass',
      isLoggedIn: true,
    };

    // Act
    deepFreeze(initialState);
    const result = sessionReducer(initialState, myAction);

    // Assert
    expect(result).to.be.deep.equals(expectedResult);

  });
});