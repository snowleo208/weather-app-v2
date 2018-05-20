import React, { Component } from 'react';

class Loading extends Component {
	render() {
		return (
			<div className={this.props.onLoading? "u-loading" : "u-none"}>
			<svg className="u-icon__md" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
				<title>Icon</title>
				<use href="sprite.svg#spin1"></use>
			</svg>
			</div>
			);
	}
}

export default Loading;