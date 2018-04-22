import Flexi from '../Common/components/generateForm';

class Module extends React.Component {

  onFlexiSubmit = (values) => {
    console.log(values);
  };

  render() {
    const flexiConfig = {
      items: [
        {
          "name": "person_name",
          "label": "Person's Name",
          "type": "TextField",
        },
        {
          "name": "states",
          "label": "Person's state",
          "type": "DropDown",
          "values": [
            "Maharashtra",
            "Kerala",
            "Tamil Nadu"
          ]
        }
      ]
    };
    return (
      <Flexi
        onSubmit={this.onFlexiSubmit}
        config={flexiConfig}
      />
    )
  }
}

export default Module;
