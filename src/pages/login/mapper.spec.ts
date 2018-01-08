import { mapLoginFromVmToModel } from './mapper';
import * as vm from './viewModel';
import * as model from '../../api/model';

describe('mapLoginFromVmToModel', () => {

  it('is a function', () => {
    expect(mapLoginFromVmToModel).to.be.a('function');
  });

  it('maps a well formed login vm to model', () => {
    // Arrange
    const loginVm : vm.LoginEntity = {
      login: 'test',
      password: 'pass'
    };

    const expectedLoginmodel : model.LoginCredentials = {
      user: 'test',
      password: 'pass'
    }

    // Act
    const result = mapLoginFromVmToModel(loginVm);

    // Assert
    expect(result).to.be.deep.equal(expectedLoginmodel);
  });

  it('attempts to map an undefined object, it should return null', () => {
    // Arrange
    const loginVm : vm.LoginEntity = void(0); // el operador void siempre devuelve undefined.
    
    // Act
    const result = mapLoginFromVmToModel(loginVm);

    // Assert
    expect(result).to.be.null;
  });

  it('attempts to map a null object, it should return null', () => {
    // Arrange
    const loginVm : vm.LoginEntity = null; // el operador void siempre devuelve undefined.
    
    // Act
    const result = mapLoginFromVmToModel(loginVm);

    // Assert
    expect(result).to.be.null;
  });

});