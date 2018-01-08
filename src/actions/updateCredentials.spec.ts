import { FieldInfo } from "../common/entities/fieldInfo";
import { updateCredentials } from "./updateCredentials";
import { actionDefs } from "../common/const/actions";
import { LoginCredentials } from "../api/model";


describe('updateCredentials action', () => {

  it('returns an action with the expected login credentials', () => {
    // Arrange
    const loginCredentials : LoginCredentials = {
      user: 'test',
      password: 'pass',
    };
    
    // Act
    const action = updateCredentials(loginCredentials);

    // Assert
    expect(action.type).to.be.equals(actionDefs.UPDATE_LOGIN_CREDENTIALS);
    expect(action.payload).to.be.deep.equals(loginCredentials);

  });

});