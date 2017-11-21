import React from 'react';

class CoordinatesButton extends React.Component {
  getMouseCoords = (e) => {
    const coordX = e.clientX;
    const coordY = e.clientY;
    return [coordX, coordY];
  }

  handleClick = (event) => {
    event.persist();
    const coords = this.getMouseCoords(event);
    this.props.onReceiveCoordinates(coords);
  }

  render() {
    return(
      <button type="button" onClick={this.handleClick}>Get Coordinates</button>
    );
  }
};

export default CoordinatesButton;
