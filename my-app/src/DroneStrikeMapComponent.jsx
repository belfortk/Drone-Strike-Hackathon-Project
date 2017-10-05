import React from "react";

class DroneStrikeMap extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <img
          src={ this.props.mapURL }
          alt= 'Map Not Found'
          style={{ color:'white'}}
        />
      </div>
    );
  }
}

export default DroneStrikeMap;
