// import preact
import { h, render, Component } from 'preact';
import style from './style'

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
			<div class = {style.message}>
				{this.alertMessage()}
			</div>
		);
	}
}
