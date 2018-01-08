import { loginReducer, LoginReducerState } from './login';
import { BaseAction } from '../common/redux/actionBase';
import { actionDefs } from '../common/const/actions';
//import * as deepFreeze from 'deep-freeze'; // No le gusta, quizá por algo entre ts y webpack porque deepFreeze tiene un default o algo así.
const deepFreeze = require('deep-freeze');

describe('loginReducer', () => {

  it('returns a default state', () => {
    // Arrange
    const myAction : BaseAction = {
      type : 'dummytype',
      payload : null, 
    };

    const expectedDefault : LoginReducerState = {
      user: '',
      password: '',
    };

    // Act
    const result = loginReducer(undefined, myAction);

    // Assert
    expect(result).to.be.deep.equal(expectedDefault);
  });

  it('action UPDATE_LOGIN_CREDENTIALS updating credentials should update reducer credentials', () => {
    // Arrange
    const dummyAction : BaseAction = {
      type : 'dummytype',
      payload : null, 
    };

    const myAction : BaseAction = {
      type : actionDefs.UPDATE_LOGIN_CREDENTIALS,
      payload : {
        user: 'John',
        password: '1234',
      }, 
    };

    // Act
    const initialState = loginReducer(undefined, dummyAction);
    deepFreeze(initialState);
    const result = loginReducer(initialState, myAction);

    // Assert
    expect(result).to.be.equals(myAction.payload);
  });
  
});