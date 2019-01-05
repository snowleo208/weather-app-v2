import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TriggerTempButton extends Component {
  render() {
    return (
      <button className="u-btn c-weather--switch" onClick={this.props.triggerTemp}>
        <svg
          className="u-icon__md"
          aria-labelledby="title"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>Temperature</title>
          {this.props.onTempTrigger ? (
            <use href="/public/sprite.svg#celsius" />
          ) : (
            <use href="/public/sprite.svg#fahrenheit" />
          )}
        </svg>
      </button>
    );
  }
}

TriggerTempButton.propTypes = {
  triggerTemp: PropTypes.func,
  onTempTrigger: PropTypes.boolean,
};

export default TriggerTempButton;
