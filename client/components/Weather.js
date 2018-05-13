import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: {},
			weather: {},
			onTempTrigger: false,
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
	triggerTemp = () => {
		this.setState((prevState, props) => {
			return {
				onTempTrigger: !prevState.onTempTrigger
			};
		});
	}
	reloadData = () => {
		this.setState((prevState, props) => {
			return {
				onLoading: !prevState.onLoading
			};
		});
		this.getData();
	}
	componentDidMount = () => {
		this.getData();
	}
	render() {
		const { weather, location } = this.state;
		const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		return (
			<div className="c-container">
			<header>
			<img src="logo_xs.png" alt="hava" />

			<div className="c-weather--switch" onClick={this.triggerTemp}>
			<svg className="u-icon__md" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
			<title>Temperature</title>
			{this.state.onTempTrigger? 
			<use href="sprite.svg#celsius"></use>
			:
			<use href="sprite.svg#fahrenheit"></use>
			}
			</svg>
			</div>
			</header>
			<div className={this.state.onLoading? "u-loading" : "u-none"}>
			{this.state.onLoading?
				<svg className="u-icon__md" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
				<title>Icon</title>
				<use href="sprite.svg#spin1"></use>
				</svg>
				: ''}
				</div>
				{!this.state.onLoading && weather.location? (
					<div className="u-fade">
					<section className="c-weather--grid">
					<div className="u-btn c-weather--reload" onClick={this.reloadData}>
					<svg className="u-icon__md" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
					<title>Reload</title>
					<use href={"sprite.svg#spin"}></use>
					</svg>
					</div>

					<svg className="u-icon__xl" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
					<title>{weather.currently + " icon"}</title>
					<use href={"sprite.svg#" + weather.currently.icon}></use>
					</svg>
					{this.state.onTempTrigger? 
						<h2 className="c-weather--temp u-text-center">{Math.round(((weather.currently.temperature - 32) * 5/9))}<span className="u-small"> °C</span></h2> : 
						<h2 className="c-weather--temp u-text-center">{Math.round(weather.currently.temperature)}<span className="u-small"> °F</span></h2>
					}

					<p className="c-weather--area">{location.region.toUpperCase() + ', ' + location.country}</p>
					<p className="c-weather--summary">{weather.currently.summary}</p>
					</section>
					<section className="c-weather--info">
					<div className="c-weather--details">
					<p className="t-info--value u-m-0">{weather.currently.windSpeed}</p>
					<svg className="u-icon__md" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
					<title>Wind</title>
					<use href={"sprite.svg#strong-wind"}></use>
					</svg>
					<p className="t-info--title u-m-0">Wind</p>
					</div>
					<div className="c-weather--details">
					<p className="t-info--value u-m-0">{weather.currently.visibility}</p>
					<svg className="u-icon__md" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
					<title>Visibility</title>
					<use href={"sprite.svg#fog"}></use>
					</svg>
					<p className="t-info--title u-m-0">Visibility</p>
					</div>
					<div className="c-weather--details">
					<p className="t-info--value u-m-0">{weather.currently.humidity * 100 + "%"}</p>
					<svg className="u-icon__md" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
					<title>Humidity</title>
					<use href={"sprite.svg#humidity"}></use>
					</svg>
					<p className="t-info--title u-m-0">Humidity</p>
					</div>
					</section>
					<section className="c-weather--forecast">
					{weather.hourly.data.map((item, index) => (
						index <= 4 ? 
						(
							<div className="c-forecast--grid" key={"forecast-" + index}>
							<svg className="u-icon__md" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
							<title>{item.icon}</title>
							<use href={"sprite.svg#" + item.icon}></use>
							</svg>
							<p className="c-forecast--time">{new Date(item.time * 1000).getHours() + ":00"}</p>
							</div>
							) : ''
						))}
					</section>
					<section className="c-weather--daily">
					{weather.daily.data.map((item, index) => (
						index !== 0 && index <= 5 ? 
						(
							<div className="c-daily--grid" key={"forecast-" + index}>
							<svg className="u-icon__md" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
							<title>{item.icon}</title>
							<use href={"sprite.svg#" + item.icon}></use>
							</svg>
							<div className="c-daily--forecast">
							<p className="c-daily--time">{week[new Date(item.time * 1000).getDay()]}</p>
							<p className="c-daily--summary">{item.summary}</p>
							</div>
							<div className="c-daily--temp">
							{this.state.onTempTrigger? 
								<p>{Math.round(((item.temperatureLow - 32) * 5/9))} - {Math.round(((item.temperatureHigh-32) * 5/9))} °C</p> : 
								<p>{Math.round(item.temperatureLow)} - {Math.round(item.temperatureHigh)} °F</p>
							}
							</div>
							</div>
							) : ''
						))}
					</section>
					</div>
					) : ''}
</div>
);
}
}

export default Weather;
