import className from 'classnames';

class Button extends React.Component {

  state = {};

  onClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <button
        className={className('btn-wrapper', {'disabled': this.props.disabled})}
        disabled={this.props.disabled}
        onClick={this.onClick}
      >
        <div className="btn-body">
          {this.props.value}
        </div>
      </button>
    )
  }
}

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
