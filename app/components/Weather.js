import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import { connect } from 'react-redux';

class Weather extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: false
    };
  };

  handleSearch(city) {

    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(city)
      .then(function(temp) {
        that.setState({
          city: city,
          temp: temp,
          isLoading: false
        });
      }, function(errorMessage) {
        that.setState({
          isLoading: false
        });
        alert(errorMessage);
      })

  };

  render() {

    var {isLoading, temp, city} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching Weather...</h3>
      } else if(temp && city) {
        return <WeatherMessage temp={temp} city={city}/>;
      }
    }

    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch.bind(this)} />
        {renderMessage()}
      </div>
    )
  }
};

export default Weather;
