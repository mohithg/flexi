import React from 'react';
import SelectWrapper from 'react-select';
import '../styles/select.scss';
import {isNullOrUndefined} from './utils';
import className from 'classnames';

class Select extends React.Component {


  componentDidMount() {
    this.setValue(this.props.defaultValue);
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.defaultValue, nextProps.defaultValue)) {
      this.setValue(nextProps.defaultValue);
    }
  }

  setValue(value) {
    this.value = value;
    if (!isNullOrUndefined(value)) {
      this.props.onChange({name: this.props.name, value});
      this.props.setValue(value);
    }
  }

  onChange = (item) => {
    let value = null;
    if (this.props.multiple) {
      value = _.map(item, 'value');
    } else {
      value = item && item.value;
    }
    this.setValue(value || '');
  };

  getLabelClassName() {
    return className('select-wrapper');
  }

  render() {
    return (
      <div className={this.getLabelClassName()}>
        <SelectWrapper
          multi={this.props.multiple}
          options={this.props.values}
          placeholder={this.props.label}
          onChange={this.onChange}
          value={isNullOrUndefined(this.props.getValue()) ? '' : this.props.getValue()}
        />
      </div>
    );
  }
}

Select.defaultProps = {
  onChange: () => {},
  list: [],
};

export default Select;
