import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { shallow, mount } from 'enzyme';
import { Props, Input } from './input';

describe('Input', () => {
  it('should be define', () => {
    // Arrange
    const inputProps: Props = {
      name: '',
      value: '',
      onChange: (e) => { },
    };

    // Act
    const component = shallow(<Input {...inputProps} />);

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('should display the informed value', () => {
    // Arrange
    const inputProps: Props = {
      name: '',
      value: 'John',
      onChange: (e) => { },
    };

    // Act
    const component = shallow(<Input {...inputProps} />);
    const inputElement = component.find('input');

    // Assert
    expect(inputElement.prop('value')).to.be.equal('John');
  });

  it('Should call onChange when input gets updated from user', () => {
    // Arrange
    const onChangeSpy = sinon.spy();

    const inputProps: Props = {
      name: '',
      value: '',
      onChange: onChangeSpy,
    };

    // Act
    const component = shallow(<Input {...inputProps} />);
    const inputElement = component.find('input');

    inputElement.simulate('change'); 

    // Assert
    expect(onChangeSpy.called).to.be.true; 
    expect(onChangeSpy.calledOnce).to.be.true; 
  });

  it('Should render as expected', () => {
    // Arrange
    const inputProps: Props = {
      name: 'myInput',
      value: 'John',
      type: 'password',
      placeholder: 'myInput place holder',
      onChange: (e) => { },
    };

    const expectedComponent = ReactDOMServer.renderToStaticMarkup(
      <div className="form-group">
        <input className="form-control"
              placeholder={inputProps.placeholder}
              name={inputProps.name}
              type={inputProps.type}
              value={inputProps.value}
        />
      </div>,
    );
    

    // Act
    const component = shallow(<Input {...inputProps} />);

    // Assert
    expect(component.html()).to.equal(expectedComponent);
  });

});