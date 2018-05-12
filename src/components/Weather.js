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
		const location = await axios.get('/api/ip');
		// const weather = await axios.get('/api/weather/');
		console.log(location);
		// console.log(weather);
		// console.log(weather);
		// this.setState({
		//     location: location.data,
		//     weather
		// });
	}
	componentDidMount = () => {
		console.log('new');
		this.getData();
	}
	render() {
		return (
			<div className="u-container">
			<h1>hava</h1>
			</div>
			);
	}
}

export default Weather;
