import React, { Component } from 'react';

class Weather extends Component {

  onFormSubmit(e) {
    e.preventDefault();

    var city = this.refs.city.value;

    if(city.length > 0) {
      this.refs.city.value = '';
      this.props.onSearch(city);
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input type="text" ref="city" />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
};

export default Weather;
