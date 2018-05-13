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
		const { weather, location } = this.state;
		const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		return (
			<div className="c-container">
			<header>
				<img src="logo_xs.png" alt="hava" />
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
				<svg className="u-icon__xl" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
				<title>{weather.currently + " icon"}</title>
				<use href={"sprite.svg#" + weather.currently.icon}></use>
				</svg>
				<h2 className="c-weather--temp u-text-center">{weather.currently.temperature}<span className="u-small"> °F</span></h2>
				<p className="c-weather--area">{location.region.toUpperCase() + ', ' + location.country}</p>
				<p className="c-weather--summary">{weather.currently.summary}</p>
				</section>
				<section className="c-weather--info">
					<div className="c-weather--wind">
						<p className="t-info--value u-m-0">{weather.currently.windSpeed}</p>
						<svg className="u-icon__md" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
						<title>Wind</title>
						<use href={"sprite.svg#strong-wind"}></use>
						</svg>
						<p className="t-info--title u-m-0">Wind</p>
					</div>
					<div className="c-weather--visibility">
						<p className="t-info--value u-m-0">{weather.currently.visibility}</p>
						<svg className="u-icon__md" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
						<title>Visibility</title>
						<use href={"sprite.svg#fog"}></use>
						</svg>
						<p className="t-info--title u-m-0">Visibility</p>
					</div>
					<div className="c-weather--humidity">
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
				<section className="c-weather--forecast">
					{weather.daily.data.map((item, index) => (
						index !== 0 && index <= 5 ? 
							(
							<div className="c-forecast--grid" key={"forecast-" + index}>
							<svg className="u-icon__md" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
							<title>{item.icon}</title>
							<use href={"sprite.svg#" + item.icon}></use>
							</svg>
							<p className="c-forecast--time">
							{new Date(item.time * 1000).getDate() + " "}
							{month[new Date(item.time * 1000).getMonth()]}
							</p>
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
