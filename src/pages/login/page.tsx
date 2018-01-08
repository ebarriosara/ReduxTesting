import * as React from 'react';
import { Header, Form } from './components';
import { LoginEntity } from './viewModel';

interface Props {
  loginInfo : LoginEntity;
  updateLoginInfo : (loginInfo : LoginEntity) => void;
  doLogin: () => void; 
}

export const LoginComponent = (props : Props) => (
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default">
          <Header />
          <Form 
            loginInfo={props.loginInfo} 
            updateLoginInfo={props.updateLoginInfo}
            doLogin={props.doLogin}/>
        </div>
      </div>
    </div>
  </div>
);