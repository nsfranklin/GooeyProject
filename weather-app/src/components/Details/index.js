// import preact
import { h, render, Component } from 'preact';
	
export default class Details extends Component {

	constructor(props) {
	super(props);
	this.state = {precipChance: "test", currentPressure: "test", currentWindSpeed: "test", currentWindDirection: "test",currentHumidity: "test" //{precipChance: props.precipCurrent, currentPressure: props.currentPressure, currentWindSpeed: props.currentWindSpeed, currentWindDirection: props.currentWindDirection,currentHumidity: props.currentHumidity
	
		}
	}
	
	render() 
	{
	
        return (<div>
		<div><body>Precipitation Chance: {precipChance}</body></div>
		<div><body>Current Pressure: {currentPressure}</body></div>
		<div><body>Current Wind Speed: {currentWindSpeed}</body></div>
		<div><body>Current Wind Direction: {currentWindDirection}</body></div>
		//<div><body>Sunrise: {sunrise}</body></div>	
		//<div><body>Sunset: {sunset}</body></div>
		<div><body>Humidity: {currentHumidity}</body></div>
		</div>
               );
    }
}
