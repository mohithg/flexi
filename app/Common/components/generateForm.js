import Form from './form';
import Text from './text';
import Select from './select';

class GenerateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderText(props = {}, key) {
    return (
      <Text
        key={key}
        {...this.propsForFields(props)}
        {...props}
        {...this.overridePropsForFields(props)}
      />
    );
  }

  renderSelect(props = {}, key) {
    return (
      <Select
        key={key}
        {...props}
        defaultValue={_.get(this.props.values, props.name)}
      />
    )
  }

  generateFields(items) {
    const fields = _.map(items, (item, key) => {
      let {type, ...props} = item;
      if(type === 'TextField') {
        return this.renderText(props, key);
      } else if(type === 'DropDown') {
        return this.renderSelect(props, key);
      }
    });
    return _.compact(fields);
  }

  render() {
    return (
      <Form
        onSubmit={this.props.onSubmit}
        onPrevBtnClick={this.props.onPrevBtnClick}
      >
        {this.generateFields(this.props.items)}
      </Form>
    );
  }
}

export default GenerateForm;
