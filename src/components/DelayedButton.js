import React from 'react';

class DelayedButton extends React.Component {
  handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>Delay Button</button>
    );
  }
};

export default DelayedButton;
