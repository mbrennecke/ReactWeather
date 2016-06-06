var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
      <div>
        <h3>The temperature in {location} is {temp}.</h3>
      </div>
    );
};

module.exports = WeatherMessage;