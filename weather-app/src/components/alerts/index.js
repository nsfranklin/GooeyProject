// import preact
import { h, render, Component } from 'preact';
import phone from '../phone'

export default class Alerts extends Component {

	alertMessage()
	{
		if(this.props.alertsarr['alerts'] == 0)
		{
			return "There are no alerts in this area."
		}
		else {
			return this.props.alertsarr['alerts'][0]['description'];
		}
	}

	render() {
		return (
			<div>
				{this.alertMessage()}
			</div>
		);
	}
}
