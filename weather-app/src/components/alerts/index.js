// import preact
import { h, render, Component } from 'preact';
import style from './style'

export default class Alerts extends Component {

	alertMessage()
	{ //check for message and return it if there is one
		if(this.props.alertsarr['alerts'] == 0)
		{
			return "There are no alerts in this area."
		}
		else {
			return this.props.alertsarr['alerts'][0]['description'];
		}
	}

	render() { //render message
		return (
			<div class = {style.message}>
				{this.alertMessage()}
			</div>
		);
	}
}
