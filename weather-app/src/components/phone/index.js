import { h, render, Component } from 'preact';
import style from './style';
import style_iphone from '../button/style_iphone';
import $ from 'jquery';
import Button from '../button';

export default class phone extends Component {

	constructor(props){
		super(props);
		var x = "London";
		var y = "20180112"
		var z = "UK";

		this.state.temp = "";
		this.state.current = "current";

		this.state.country = "GB";
		this.state.zmw="00000.40.03779";
		this.state.date = "";
		this.fetchWeatherDataCurrent();
		this.setState({ display: true });
	}

	fetchWeatherDataCurrent = () => {
		var url = "http://api.wunderground.com/api/6e968d28787ddc8c/conditions/q/zmw:"+this.state.zmw+".json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponseConditions,
			error : function(req, err){ console.log('API call failed ' + err); }

		})
	}

	fetchWeatherDataHistory = () => {
		var url = "http://api.wunderground.com/api/6e968d28787ddc8c/history_"+this.history+"/q/zmw:"+this.state.zmw+".json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponseHistory,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
	}

	fetchWeatherDataForecast = () => {
		var url = "http://api.wunderground.com/api/6e968d28787ddc8c/hourly10day/q/zmw:"+this.state.zmw+".json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponseForecast,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
	}

	render() {
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
		if(this.state.current == "current")
		{
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
		}/*
			<div class={ style.container }>
				<div class={ style.header }>
					<div class={ style.city }>{ this.state.winddir }</div>
				</div>
				<div class={ style.details }></div>

			</div>*/
	}

	parseResponseConditions = (parsed_json) => {
		var location = parsed_json['current_observation']['display_location']['city'];
		var temp_c = parsed_json['current_observation']['temp_c'];
		var conditions = parsed_json['current_observation']['weather'];

		// set states for fields so they could be rendered later on
		this.setState({
			locate: location,
			temp: temp_c,
			cond : conditions
		});
	}

	parseResponseHistory = (parsed_json) => {
		var wdird = parsed_json['history']['observations'][0]['wdird'];

		// set states for fields so they could be rendered later on
		this.setState({
			winddir: wdird
		});
	}

	parseResponseForecast = (parsed_json) => {
		var wdird = parsed_json['history']['observations'][0]['wdird'];

		// set states for fields so they could be rendered later on
		this.setState({
			winddir: wdird
		});
	}
}
