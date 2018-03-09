// import preact
import { h, render, Component } from 'preact';
import phone from '../phone'

export default class Settings extends Component {

	render() {
		return (
			<div>
				<button>TempC</button>
				<button>MPH</button>
			</div>
		);
	}
}
