import * as vm from './viewModel';
import * as model from '../../api/model';

export const mapLoginFromVmToModel = (loginInfo : vm.LoginEntity) : model.LoginCredentials => (
  (!loginInfo) ? 
    null 
  : 
    {
      user: loginInfo.login,
      password: loginInfo.password,
    }
);

export const mapLoginFromModelToVm = (loginInfo : model.LoginCredentials) : vm.LoginEntity => (
  (!loginInfo) ? 
    null 
  : 
    {
      login: loginInfo.user,
      password: loginInfo.password,
    }
);