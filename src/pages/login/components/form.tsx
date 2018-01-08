import * as React from 'react';
import { LoginEntity } from '../viewModel';
import { Input } from '../../../common/components';

interface Props {
  loginInfo: LoginEntity;
  updateLoginInfo: (loginInfo: LoginEntity) => void;
  doLogin: (loginInfo: LoginEntity) => void;
}

const updateField = (props: Props, fieldName: keyof LoginEntity) => (e: React.ChangeEvent<HTMLInputElement>) => {
  props.updateLoginInfo(
    {
      ...props.loginInfo,
      [fieldName]: e.target.value,
    }
  );
}

export class Form extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  private performLogin = () => {
    this.props.doLogin(this.props.loginInfo);
  }

  render() {
    return (
      <div className="panel-body">
        <form role="form">
          <div className="form-group">
            <Input
              placeholder="E-mail"
              name="email"
              value={this.props.loginInfo.login}
              onChange={updateField(this.props, 'login')}
            />
          </div>
          <div className="form-group">
            <Input
              placeholder="Password"
              name="password"
              type="password"
              value={this.props.loginInfo.password}
              onChange={updateField(this.props, 'password')}
            />
          </div>
          <input
            type="button"
            className="btn btn-lg btn-success btn-block "
            value="Login"
            onClick={this.performLogin}
          />
        </form>
      </div>
    );
  }
};