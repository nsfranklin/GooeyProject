import { h, render, Component } from 'preact';
import style from './style';
import style_iphone from '../button/style_iphone';
import $ from 'jquery';
import Button from '../button';

export default class datesContainer extends Component {

	constructor(props){
		var date = new Date();
		var today = new Date(date.setTime( date.getTime() + 0 * 86400000 ));
		var date = new Date();
		var datem1 = new Date(date.setTime( date.getTime() + -1 * 86400000 ));
		var date = new Date();
		var datem2 = new Date(date.setTime( date.getTime() + -2 * 86400000 ));
		var date = new Date();
		var datem3 = new Date(date.setTime( date.getTime() + -3 * 86400000 ));
		var date = new Date();
		var datep1 = new Date(date.setTime( date.getTime() + 1 * 86400000 ));
		var date = new Date();
		var datep2 = new Date(date.setTime( date.getTime() + 2 * 86400000 ));
		var date = new Date();
		var datep3 = new Date(date.setTime( date.getTime() + 3 * 86400000 ));

	super(props);

	}

	render() {
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
		if(this.state.current == "current")
		{


		return (

				<div class={ style.container }>
					<div class={ style.header }>
						<div class={ style.city }>{ this.state.locate }</div>
						<div class={ style.conditions }>{ this.state.cond }</div>
						<span class={ tempStyles }>{ this.state.temp }</span>
					</div>
					<div class={ style.details }></div>
					<div class= { style_iphone.container }>
					{ this.state.display ? <Button number={ "S" }  class={ style_iphone.button } clickFunction={ this.fetchWeatherDataForecast }/ > : null }
						{ this.state.display ? <Button number={ datem3.getDate() }  class={ style_iphone.button } clickFunction={ this.fetchWeatherDataHistory }/ > : null }
						{ this.state.display ? <Button number={ datem2.getDate()}  class={ style_iphone.button } clickFunction={ this.fetchWeatherDataHistory }/ > : null }
						{ this.state.display ? <Button number={ datem1.getDate()}  class={ style_iphone.button } clickFunction={ this.fetchWeatherDataHistory }/ > : null }
						{ this.state.display ? <Button number={ today.getDate() }  class={ style_iphone.button } clickFunction={ this.fetchWeatherDataCurrent }/ > : null }
						{ this.state.display ? <Button number={ datep1.getDate() }  class={ style_iphone.button } clickFunction={ this.fetchWeatherDataForecast }/ > : null }
						{ this.state.display ? <Button number={ datep2.getDate() }  class={ style_iphone.button } clickFunction={ this.fetchWeatherDataForecast }/ > : null }
						{ this.state.display ? <Button number={ datep3.getDate() }  class={ style_iphone.button } clickFunction={ this.fetchWeatherDataForecast }/ > : null }
					</div>
				</div>
			);
		}/
	}

}
