import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: {},
			weather: {},
			onTrigger: false,
			onLoading: true
		}
		this.getData = this.getData.bind(this);
	}
	async getData() {
		const weather = await axios.get('/api/weather');
		console.log(weather);
		this.setState((prevState, props) => {
		  return {
		  	location: weather.data.location,
			weather: weather.data,
			onLoading: !prevState.onLoading
		  };
		});
	}
	componentDidMount = () => {
		this.getData();
	}
	render() {
		return (
			<div className="u-container">
				<h1>hava</h1>
				<div className="u-loading">
					{this.state.onLoading? 'Loading...' : ''}
				</div>
				<h2>{this.state.weather.location? this.state.weather.location.region : ''}</h2>
			</div>
			);
	}
}

export default Weather;
