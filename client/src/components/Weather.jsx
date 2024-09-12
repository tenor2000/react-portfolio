import React from 'react';

function WeatherToday(props) {
    return (
        <div>
            <h1>Weather Today</h1>
            <p>Temperature: {props.temp}°C</p>
            <p>Humidity: {props.humidity}%</p>
            <p>Wind Speed: {props.windSpeed} m/s</p>
        </div>
    );
}