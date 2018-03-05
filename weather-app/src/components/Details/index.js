// import preact
import { h, render, Component } from 'preact';
import phone from '../phone';

export default class Details extends Component {

	constructor(props) {
	super(props);
	this.state.precipChance = 22;
	this.state.currentPressure = "test";
	this.state.currentWindSpeed = "test";
	this.state.currentWindDirection = "test";
	this.state.currentHumidity = "test";
	this.setState({display: true});
	}
	render() 
	{
        return (
		<div><p>Precipitation Chance: {this.state.precipChance}</p>
		<p>Current Pressure: {this.state.currentPressure}</p>
		<p>Current Wind Speed: {this.state.currentWindSpeed}</p>
		<p>Current Wind Direction: {this.state.currentWindDirection}</p>
		<p>Humidity: {this.state.currentHumidity}</p>
		</div>
		);
    }
}
