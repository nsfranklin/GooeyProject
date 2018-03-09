// import preact
import { h, render, Component } from 'preact';
import style from './style';

export default class Settings extends Component {

	render() {
		return (
			<div class={style.container}>
				<button>TempC</button>
				<button>MPH</button>
			</div>
		);
	}
}
