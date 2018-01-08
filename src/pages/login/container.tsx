import * as React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { LoginComponent } from './page';
import { LoginEntity } from './viewModel';
import { doLogin } from '../../api/login';
import { mapLoginFromVmToModel, mapLoginFromModelToVm } from './mapper';
import { AppState } from '../../reducers/index';
import { updateCredentials, performLoginRequestStart } from '../../actions';

const mapStateToProps = (state : AppState) => ({
  loginInfo: mapLoginFromModelToVm(state.loginReducer),
});

const mapDispatchToProps = (dispatcher) => ({
  updateLoginInfo: (loginInfo : LoginEntity) => {
    dispatcher(updateCredentials(mapLoginFromVmToModel(loginInfo)));
  },
  doLogin: (loginInfo : LoginEntity) => {
    dispatcher(performLoginRequestStart(mapLoginFromVmToModel(loginInfo)));
  },
});

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
