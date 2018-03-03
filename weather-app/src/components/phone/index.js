import { h, render, Component } from 'preact';
import style from './style';
import style_iphone from '../button/style_iphone';
import $ from 'jquery';
import Button from '../button';
import Search from '../search';

const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
var date = new Date();

export default class phone extends Component {

	constructor(props){

		super(props);
		this.state.zmw="00000.40.03779";
		this.state.date = "";
		this.state.hourly = "";
		this.state.days = "";
		this.state.monthString = monthNames[(date.getMonth())];
		this.state.locationString = "location";
		this.state.showSearch = false;
		this.state.test = "";
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
		var url = "http://api.wunderground.com/api/03cd34b98761d6d4/history_"+ this.state.date +"/q/zmw:"+this.state.zmw+".json";
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

	handleHistoryClick(param, e)
	{
		this.setState({date : param});
		var month = param.slice(4,6);

		this.setState({monthString : monthNames[parseInt(month)-1]})

		this.fetchWeatherDataHistory();
	}

	handleForecastClick(param, e)
	{
		this.setState({date : param});
		this.fetchWeatherDataForecast();
	}

	getWeatherFormat(date)
	{
		return date.getDate()+ (date.getMonth() + 1) + date.getFullYear();
	}

	toggleSearch() {
    this.setState({
      showSearch: !this.state.showSearch
    });
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

			//datem3.getDate()+ (datem3.getMonth() + 1) + datem3.getFullYear()
			var dates1 = datem1.getFullYear()+ "" + ("0" + (datem1.getMonth() + 1)).slice(-2)+ "" + ("0" + (datem1.getDate())).slice(-2)+ "";
			var dates2 = datem2.getFullYear()+ "" + ("0" + (datem2.getMonth() + 1)).slice(-2)+ "" + ("0" + (datem2.getDate())).slice(-2)+ "";
			var dates3 = datem3.getFullYear()+ "" + ("0" + (datem3.getMonth() + 1)).slice(-2)+ "" + ("0" + (datem3.getDate())).slice(-2)+ "";



		return (

				<div class={ style.container }>
				<div class= { style_iphone.container }>
				<Button number={ "S" }  class={ style_iphone.button } clickFunction={ this.fetchWeatherDataForecast }/ >
					<Button number={ datem3.getDate() } class={ style_iphone.button } clickFunction={  this.handleHistoryClick.bind(this, dates3) }/ >
					<Button number={ datem2.getDate() }  class={ style_iphone.button } clickFunction={  this.handleHistoryClick.bind(this, dates2) }/ >
					<Button number={ datem1.getDate() }  class={ style_iphone.button } clickFunction={  this.handleHistoryClick.bind(this, dates1) }/ >
					<Button number={ today.getDate()  }  class={ style_iphone.button } clickFunction={ this.fetchWeatherDataCurrent }/ >
					<Button number={ datep1.getDate() }  class={ style_iphone.button } clickFunction={ this.handleForecastClick.bind(this, 1) }/ >
					<Button number={ datep2.getDate() }  class={ style_iphone.button } clickFunction={ this.handleForecastClick.bind(this, 2) }/ >
					<Button number={ datep3.getDate() }  class={ style_iphone.button } clickFunction={ this.handleForecastClick.bind(this, 3) }/ >
				</div>
				<Button number={ this.state.locationString } class={ style.searchT } clickFunction={ this.toggleSearch.bind(this) }/>
				{this.state.showSearch ? <Search class = { style.popup } ting={this.doSomething.bind(this)} text='Close Me' closePopup={this.toggleSearch.bind(this)} /> : null }
				<div class={ style.month }>{ this.state.monthString }{this.state.test}</div>
				<div class={ style.city }>{ this.state.locate }</div>
				<div class={ style.temperature }>{ this.state.temp }</div>
				<div class={ style.temperature }>{ this.state.cond }</div>


					<div class={ style.details }></div>

				</div>
			);
		}

		doSomething(arg)
		{
			this.setState({ test : arg });
		}

	parseResponseConditions = (parsed_json) => {
		this.setState({monthString : monthNames[date.getMonth()]});
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
		var observations = parsed_json['history']['observations'];
		var hours = new Array(24);
		var x = 0;
		for(var i = 0; i < observations.length ; i++)
		{
			if(observations[i]['date']['hour'] == x)
			{
				hours[x] = observations[i];
				x++;
			}
		}
		var tempm = hours[currentTime.getHours()]['tempm'];
		var conditions = hours[currentTime.getHours()]['conds'];

		// set states for fields so they could be rendered later on
		this.setState({
			cond: conditions,
			temp : tempm
		});
	}

	parseResponseForecast = (parsed_json) => {
		var monthCalc = new Date(date.setTime( date.getTime() + this.state.date * 86400000 ));
		this.setState({ monthString : monthNames[ monthCalc.getMonth() ] });
		var temp_c = parsed_json['hourly_forecast'][this.state.date*23]['temp']['metric'];
		var conditions = parsed_json['hourly_forecast'][this.state.date*23]['condition'];

		// set states for fields so they could be rendered later on
		this.setState({
			cond : conditions,
			temp: temp_c

		});
	}
}
