// Review Using Props with Stateless Functional Components

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line
class Camper extends React.Component {  
  render () {
    return (
    <div><p>{this.props.name}</p></div>
  )
  }  
}
// default props
Camper.defaultProps = { name: 'CamperBot' }

// Define proptypes
Camper.propTypes = {
  name: PropTypes.string.isRequired,
};
