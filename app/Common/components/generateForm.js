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
        {...props}
      />
    );
  }

  renderSelect(props = {}, key) {
    return (
      <Select
        key={key}
        {...props}
      />
    )
  }

  generateFields({items}) {
    let fieldsToShow = [];
    _.each(items, (item, key) => {
      let {type, ...props} = item;
      if(type === 'TextField') {
        fieldsToShow.push(this.renderText(props, key));
      } else if(type === 'DropDown') {
        fieldsToShow.push(this.renderSelect(props, key));
      }
      if (item.items) {
        fieldsToShow.push(_.flatten(this.generateFields(item)));
      }
      return fieldsToShow;
    });
    return _.compact(fieldsToShow);
  }

  render() {
    return (
      <Form
        onSubmit={this.props.onSubmit}
        onPrevBtnClick={this.props.onPrevBtnClick}
      >
        {this.generateFields(this.props.config)}
      </Form>
    );
  }
}

export default GenerateForm;
