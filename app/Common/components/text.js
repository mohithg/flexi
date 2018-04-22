import React from 'react';
import {withFormsy} from 'formsy-react';
import className from 'classnames'
import '../styles/text.scss';
import {isNotEmpty} from './utils';

class Text extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setValue(this.props.defaultValue);
  }

  setValue(value) {
    this.props.setValue(value);
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.defaultValue, nextProps.defaultValue)) {
      this.setValue(nextProps.defaultValue);
    }
  }

  onFocus = () => {
    this.setState({
      focus: true,
    });
  };

  onBlur = () => {
    this.props.setValue(this.props.getValue() || '');
    this.setState({
      focus: false,
    });
  };

  getContainerClassName() {
    return className('text-container', {'no-data': this.state.focus || !_.isEmpty(this.props.getValue())})
  }

  onChange = (event) => {
    const value = event.currentTarget.value;
    // Store validation but dont validate
    if(!this.props.isValid()){
      this.props.setValue(value);
    } else {
      this.props.setValue(value, false);
    }
    this.props.onChange(value);
  };

  onMount = (input)  =>{
    this.input = input;
  };

  getLabelClassName() {
    return className('text-label', {'required': this.props.required});
  }

  render() {
    return (
      <div className={this.getContainerClassName()}>
        <label className={this.getLabelClassName()} htmlFor={this.props.name}>{this.props.label}</label>
        <input
          autoComplete="off"
          ref={this.onMount}
          type={this.props.type}
          name={this.props.name}
          className={className(this.props.className, 'text-input')}
          required={this.props.required}
          placeholder={this.props.label}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={this.props.getValue() || ''}
          onChange={this.onChange}
        />
        {
          !this.state.focus &&
          <span className="error-message">{
            isNotEmpty(this.props.getValue()) &&
            this.props.getErrorMessage()}</span>
        }
      </div>
    )
  }
}

Text.defaultProps = {
  className: 'text',
  type: 'text',
  onChange: () => {},
};

export default withFormsy(Text);
