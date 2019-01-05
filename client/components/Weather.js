import React, { Component } from 'react';
import axios from 'axios';
import TriggerTempButton from './TriggerTempButton';
import Loading from './Loading';
import ReloadButton from './ReloadButton';
import '@babel/register';
import '@babel/polyfill';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      weather: {},
      onTempTrigger: false,
      onLoading: true,
    };
    this.appRoot = React.createRef();
    this.getData = this.getData.bind(this);
    this.reloadData = this.reloadData.bind(this);
    this.triggerTemp = this.triggerTemp.bind(this);
  }
  async getData() {
    const weather = await axios.get('/api/weather');
    // console.log(weather);
    this.setState(prevState => {
      return {
        location: weather.data.location,
        weather: weather.data,
        onLoading: !prevState.onLoading,
      };
    });
  }
  triggerTemp() {
    this.setState(prevState => {
      return {
        onTempTrigger: !prevState.onTempTrigger,
      };
    });
  }
  reloadData() {
    this.setState(prevState => {
      return {
        onLoading: !prevState.onLoading,
      };
    });
    this.getData();
  }
  setBackground = () => {
    if (window.innerWidth > 1000) {
      let hour = new Date().getHours();
      if (hour > 5 && hour < 12) {
        this.appRoot.current.style.backgroundImage =
          'url("/public/img/simon-matzinger-345390-unsplash.jpg")';
      } else if (hour > 18 && hour < 5) {
        this.appRoot.current.style.backgroundImage =
          'url("/public/img/michael-liao-388166-unsplash.jpg")';
      } else {
        this.appRoot.current.style.backgroundImage =
          'url("/public/img/ales-krivec-24158-unsplash.jpg")';
      }
    }
  };
  componentDidMount() {
    this.setBackground();
    this.getData();
  }
  render() {
    const { weather, location } = this.state;
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div id="app" ref={this.appRoot}>
        <header>
          <img src="/public/logo_xs.png" alt="hava" />

          <ReloadButton
            reloadData={this.reloadData}
            onClick={this.reloadData}
          />
        </header>
        <div className="c-container">
          <div>
            <Loading onLoading={this.state.onLoading} />
          </div>
          {!this.state.onLoading && weather.currently ? (
            <div className="c-weather--container u-fade">
              <section className="c-weather--grid">
                <TriggerTempButton
                  triggerTemp={this.triggerTemp}
                  onTempTrigger={this.state.onTempTrigger}
                />

                <svg
                  className="u-icon__xl"
                  aria-labelledby="title"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <title>{weather.currently + ' icon'}</title>
                  <use href={'/public/sprite.svg#' + weather.currently.icon} />
                </svg>
                {this.state.onTempTrigger ? (
                  <h2 className="c-weather--temp u-text-center">
                    {Math.round(((weather.currently.temperature - 32) * 5) / 9)}
                    <span className="u-small"> °C</span>
                  </h2>
                ) : (
                  <h2 className="c-weather--temp u-text-center">
                    {Math.round(weather.currently.temperature)}
                    <span className="u-small"> °F</span>
                  </h2>
                )}
                <p className="c-weather--area">
                  {location.region.toUpperCase() + ', ' + location.country}
                </p>
                <p className="c-weather--summary">
                  {weather.currently.summary}
                </p>
              </section>

              <div className="u-flex-half">
                <section className="c-weather--info">
                  <div className="c-weather--details">
                    <p className="t-info--value u-m-0">
                      {weather.currently.windSpeed}
                    </p>
                    <svg
                      className="u-icon__md"
                      aria-labelledby="title"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <title>Wind</title>
                      <use href={'/public/sprite.svg#strong-wind'} />
                    </svg>
                    <p className="t-info--title u-m-0">Wind</p>
                  </div>
                  <div className="c-weather--details">
                    <p className="t-info--value u-m-0">
                      {weather.currently.visibility}
                    </p>
                    <svg
                      className="u-icon__md"
                      aria-labelledby="title"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <title>Visibility</title>
                      <use href={'/public/sprite.svg#fog'} />
                    </svg>
                    <p className="t-info--title u-m-0">Visibility</p>
                  </div>
                  <div className="c-weather--details">
                    <p className="t-info--value u-m-0">
                      {Math.round(weather.currently.humidity * 100) + '%'}
                    </p>
                    <svg
                      className="u-icon__md"
                      aria-labelledby="title"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <title>Humidity</title>
                      <use href={'/public/sprite.svg#humidity'} />
                    </svg>
                    <p className="t-info--title u-m-0">Humidity</p>
                  </div>
                </section>

                <section className="c-weather--forecast">
                  {weather.hourly.data.map((item, index) =>
                    index <= 4 ? (
                      <div
                        className="c-forecast--grid"
                        key={'forecast-' + index}
                      >
                        <svg
                          className="u-icon__md"
                          aria-labelledby="title"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <title>{item.icon}</title>
                          <use href={'/public/sprite.svg#' + item.icon} />
                        </svg>
                        <p className="c-forecast--time">
                          {new Date(item.time * 1000).getHours() + ':00'}
                        </p>
                      </div>
                    ) : (
                      ''
                    )
                  )}
                </section>
              </div>
              <section className="c-weather--daily">
                {weather.daily.data.map((item, index) =>
                  index !== 0 && index <= 6 ? (
                    <div className="c-daily--grid" key={'forecast-' + index}>
                      <svg
                        className="u-icon__md"
                        aria-labelledby="title"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <title>{item.icon}</title>
                        <use href={'/public/sprite.svg#' + item.icon} />
                      </svg>
                      <div className="c-daily--forecast">
                        <p className="c-daily--time">
                          {week[new Date(item.time * 1000).getDay()]}
                        </p>
                        {this.state.onTempTrigger ? (
                          <p className="c-daily--time">
                            {Math.round(((item.temperatureLow - 32) * 5) / 9)}/
                            {Math.round(((item.temperatureHigh - 32) * 5) / 9)}{' '}
                            °C
                          </p>
                        ) : (
                          <p className="c-daily--time">
                            {Math.round(item.temperatureLow)}/
                            {Math.round(item.temperatureHigh)} °F
                          </p>
                        )}
                        <p className="c-daily--summary">{item.summary}</p>
                      </div>
                    </div>
                  ) : (
                    ''
                  )
                )}
              </section>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

export default Weather;
