import { h, render, Component } from 'preact';
import style from './style';
import style_iphone from '../button/style_iphone';
import $ from 'jquery';
import Button from '../button';

export default class phone extends Component {

	constructor(props){
		super(props);
		this.state.zmw="00000.40.03779";
		this.state.date = "";
		this.state.history="20180220";
		this.state.hourly = "";
		this.state.days = "";
		this.fetchWeatherDataCurrent();
		this.setState({ display: true });
	}

	fetchWeatherDataCurrent = () => {
		var url = "http://api.wunderground.com/api/03cd34b98761d6d4/conditions/q/zmw:"+this.state.zmw+".json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponseConditions,
			error : function(req, err){ console.log('API call failed ' + err); }

		})
	}

	fetchWeatherDataHistory = () => {
		var url = "http://api.wunderground.com/api/03cd34b98761d6d4/history_20180220/q/zmw:"+this.state.zmw+".json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponseHistory,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
		console.log(this.state.date);
	}

	fetchWeatherDataForecast = () => {
		var url = "http://api.wunderground.com/api/03cd34b98761d6d4/hourly10day/q/zmw:"+this.state.zmw+".json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponseForecast,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
	}

	handleClick = (e) =>
	{
		console.log(e);
	}

	render() {
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;

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
			var month = "FEB";



		return (

				<div class={ style.container }>
				<div class= { style_iphone.container }>
				{ this.state.display ? <Button number={ "S" }  class={ style_iphone.button } clickFunction={ this.fetchWeatherDataForecast }/ > : null }
					{ this.state.display ? <Button number={ datem3.getDate() } date={ this.state.date }  class={ style_iphone.button } clickFunction={ this.fetchWeatherDataHistory }/ > : null }
					{ this.state.display ? <Button number={ datem2.getDate() }  class={ style_iphone.button } clickFunction={ this.fetchWeatherDataHistory }/ > : null }
					{ this.state.display ? <Button number={ datem1.getDate() }  class={ style_iphone.button } clickFunction={ this.fetchWeatherDataHistory }/ > : null }
					{ this.state.display ? <Button number={ today.getDate()  }  class={ style_iphone.button } clickFunction={ this.fetchWeatherDataCurrent }/ > : null }
					{ this.state.display ? <Button number={ datep1.getDate() }  class={ style_iphone.button } clickFunction={ this.fetchWeatherDataForecast }/ > : null }
					{ this.state.display ? <Button number={ datep2.getDate() }  class={ style_iphone.button } clickFunction={ this.fetchWeatherDataForecast }/ > : null }
					{ this.state.display ? <Button number={ datep3.getDate() }  class={ style_iphone.button } clickFunction={ this.fetchWeatherDataForecast }/ > : null }
				</div>
				<div class={ style.month }>{ "FEB" }</div>
				<div class={ style.city }>{ this.state.locate }</div>
				<div class={ style.temperature }>{ this.state.temp }</div>
				<div class={ style.temperature }>{ this.state.cond }</div>

					<div class={ style.details }></div>

				</div>
			);
		}

	parseResponseConditions = (parsed_json) => {
		var temp_c = parsed_json['current_observation']['temp_c'];
		var conditions = parsed_json['current_observation']['weather'];

		// set states for fields so they could be rendered later on
		this.setState({
			temp : temp_c,
			cond : conditions
		});
	}

	parseResponseHistory = (parsed_json) => {
		var currentTime = new Date();
		console.log(currentTime.getHours());
		var tempm = parsed_json['history']['observations'][currentTime.getHours()-1]['tempm'];
		var conditions = parsed_json['history']['observations'][currentTime.getHours()-1]['conds'];

		// set states for fields so they could be rendered later on
		this.setState({
			cond: conditions,
			temp : tempm
		});
	}

	parseResponseForecast = (parsed_json) => {
		var temp_c = parsed_json['hourly_forecast'][23]['temp']['metric'];
		var conditions = parsed_json['hourly_forecast'][23]['condition'];

		// set states for fields so they could be rendered later on
		this.setState({
			cond : conditions,
			temp: temp_c

		});
	}
}
