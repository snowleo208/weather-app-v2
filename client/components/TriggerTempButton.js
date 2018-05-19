import React, { Component } from 'react';

class TriggerTempButton extends Component {
	render() {
		return (
			<div className="u-btn c-weather--switch" onClick={this.props.triggerTemp}>
			<svg className="u-icon__md" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
			<title>Temperature</title>
			{this.props.onTempTrigger? 
				<use href="sprite.svg#celsius"></use>
				:
				<use href="sprite.svg#fahrenheit"></use>
			}
			</svg>
			</div>
			);
	}
}

export default TriggerTempButton;