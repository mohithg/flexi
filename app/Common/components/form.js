import Formsy from 'formsy-react';
import Button from 'Common/components/button';
import '../styles/form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      valid: true,
    };
  }

  onSubmit = (values) => {
    this.props.onSubmit(values);
  };

  onInvalid = () => {
    this.setState({
      valid: false,
    });
  };

  onValid = () => {
    this.setState({
      valid: true,
    });
  };

  render() {
    return (
      <Formsy
        onValid={this.onValid}
        onInvalid={this.onInvalid}
        onValidSubmit={this.onSubmit}
      >
        <div className="form-items">
          {this.props.children}
        </div>
        <div className="btn-container">
          <Button
            value="submit"
            type="submit"
          />
        </div>
      </Formsy>
    )
  }
}

export default Form;
