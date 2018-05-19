import React, { Component } from 'react';

class ReloadButton extends Component {
	render() {
		return (
			<button className="c-weather--reload" onClick={this.props.reloadData}>
				<svg className="u-icon__md" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
				<title>Reload</title>
				<use href={"sprite.svg#spin"}></use>
				</svg>
			</button>
			);
	}
}

export default ReloadButton;