import * as React from 'react';

export interface Props {
  name : string;
  value : string;
  onChange : (e : React.ChangeEvent<HTMLInputElement>) => void;
  type? : string;
  placeholder? : string;
}

export const Input: React.StatelessComponent<Props> = (props) => (
  <div className="form-group">
    <input className="form-control"
      placeholder={props.placeholder}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
  </div>
);

Input.defaultProps = {
  type: "text"
};