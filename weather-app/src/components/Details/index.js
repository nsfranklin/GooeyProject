// import preact
import { h, render, Component } from 'preact';

export default class Details extends Component {

	render()
	{
        return (
		<div>
		<p>Pressure: {this.props.dataf['hourly_forecast'][this.props.days*23]['mslp']['metric']}mbar</p>
		<p>Wind Speed: {this.props.dataf['hourly_forecast'][this.props.days*23]['wspd']['metric']} kmh</p>
		<p>Wind Direction: {this.props.dataf['hourly_forecast'][this.props.days*23]['wdir']['dir']}</p>
		<p>Humidity: {this.props.dataf['hourly_forecast'][this.props.days*23]['humidity']}</p>
		<p>Track Temperature: {this.props.dataf['hourly_forecast'][this.props.days*23]['temp']['metric']-1}</p>
		</div>
		);
    }
}
