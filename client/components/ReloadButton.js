import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReloadButton extends Component {
  render() {
    return (
      <button className="c-weather--reload" onClick={this.props.reloadData}>
        <svg
          className="u-icon__md"
          aria-labelledby="title"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>Reload</title>
          <use href={'/public/sprite.svg#spin'} />
        </svg>
      </button>
    );
  }
}

ReloadButton.propTypes = {
  reloadData: PropTypes.func,
};

export default ReloadButton;
