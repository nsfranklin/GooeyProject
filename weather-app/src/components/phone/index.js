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
		this.state.zmw="";
		this.state.date = "";
		this.state.latlon = "";
		this.state.city="";
		this.state.feelslike = "";
		this.state.forecastJSON = new Array();
		this.state.currentJSON = new Array();
		this.state.pop = "";
		this.getLocation();
		this.state.monthString = monthNames[(date.getMonth())];
		this.state.locationString = "location";
		this.state.showSearch = false;
		this.state.showSettings = false;
		this.state.searchTerm = "";
		this.state.showAlerts = false;
		this.state.searchList = new Array(20);
		this.state.current = "current";
	}

	setJSON()
	{
		this.fetchWeatherDataCurrent();
	}

	getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.setLocation);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
	}

	setLocation = (position) => {
	var format = position.coords.latitude+","+position.coords.longitude;
	this.setState({latlon:format});
	this.fetchLocation();
	}

fetchLocation = () => {
	var url = "http://api.wunderground.com/api/c8bdb7b86b273272/conditions/q/"+this.state.latlon+".json";
	$.ajax({
		url: url,
		dataType: "jsonp",
		success : this.parseResponseLocation,
		error : function(req, err){ console.log('API call failed ' + err); }

	})
}

parseResponseLocation = (parsed_json) => {
	console.log(parsed_json);
	var zip = parsed_json['current_observation']['display_location']['zip'];
	var magic = parsed_json['current_observation']['display_location']['magic'];
	var wmo = parsed_json['current_observation']['display_location']['wmo'];
	var city = parsed_json['current_observation']['display_location']['city'];

	var zmwm = zip+"."+magic+"."+wmo;

	this.setState({
		zmw : zmwm,
		current : "current",
		locationString : city
	});
	this.setJSON();


}

	fetchWeatherDataCurrent = () => {
		var url = "http://api.wunderground.com/api/c8bdb7b86b273272/conditions/q/zmw:"+this.state.zmw+".json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponseConditions,
			error : function(req, err){ console.log('API call failed ' + err); }

		})
	}


	fetchWeatherDataForecast = () => {
		var url = "http://api.wunderground.com/api/c8bdb7b86b273272/hourly10day/q/zmw:"+this.state.zmw+".json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponseForecast,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
	}

	handleForecastClick(param, e)
	{
		var parsed_json = this.state.forecastJSON;
		var date = new Date();
		var monthCalc = new Date(date.setTime( date.getTime() + this.state.date * 86400000 ));
		var temp_c = this.state.forecastJSON['hourly_forecast'][param*23]['temp']['metric'];
		var conditions = this.state.forecastJSON['hourly_forecast'][param*23]['condition'];
		var popc = this.state.forecastJSON['hourly_forecast'][param*23]['pop'];
		var feelslikec = this.state.forecastJSON['hourly_forecast'][param*23]['feelslike']['metric'];
		this.setState({
			monthString : monthNames[monthCalc.getMonth()],
			temp : temp_c,
			cond : conditions,
			pop : popc,
			feelslike : feelslikec
			});

			console.log(this.state.temp);

	}

	handleTodayClick(param, e)
	{
		var parsed_json = this.state.currentJSON;
		var temp_c = parsed_json['current_observation']['temp_c'];
		var conditions = parsed_json['current_observation']['weather'];
		var city = parsed_json['current_observation']['display_location']['city'];
		var popc = this.state.forecastJSON['hourly_forecast'][0]['pop'];
		var feelslikec = parsed_json['current_observation']['feelslike_c'];
		this.setState({
			monthString : monthNames[date.getMonth()],
			temp : temp_c,
			cond : conditions,
			locationString : city,
			pop : popc,
			feelslike : feelslikec
			});
	}

	toggleSearch() {
    this.setState({
      showSearch: !this.state.showSearch
    });
	}

	toggleSettings() {
    this.setState({
      showSettings: !this.state.showSettings
    });
	}

	toggleAlerts() {
    this.setState({
      showAlerts: !this.state.showAlerts
    });
		console.log(this.state.forecastJSON);
		console.log(this.state.currentJSON);
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




		return (

				<div class={ style.container }>
				<Button number={ "A" }  class={ style_iphone.button } clickFunction={ this.toggleAlerts.bind(this) }/ >
				<div class= { style_iphone.container }>
					<Button number={ "S" }  class={ style_iphone.button } clickFunction={ this.toggleSettings.bind(this) }/ >

					<Button number={ today.getDate()  }  class={ style_iphone.button } clickFunction={ this.handleTodayClick.bind(this, 0)}/ >
					<Button number={ datep1.getDate() }  class={ style_iphone.button } clickFunction={ this.handleForecastClick.bind(this, 1) }/ >
					<Button number={ datep2.getDate() }  class={ style_iphone.button } clickFunction={ this.handleForecastClick.bind(this, 2) }/ >
					<Button number={ datep3.getDate() }  class={ style_iphone.button } clickFunction={ this.handleForecastClick.bind(this, 3) }/ >
				</div>
				<Button number={ this.state.locationString } class={ style.searchT } clickFunction={ this.toggleSearch.bind(this) }/>
				{this.state.showSearch ? <Search class = { style.popup } setzmw = { this.setZmwFromSearch.bind(this) } other = { this.state.searchList } ting={this.getSearchResults.bind(this)} text='Close Me' closePopup={this.toggleSearch.bind(this)} /> : null }
				<div >{ this.state.monthString }{this.state.test}</div>
				<div >{ this.state.locate }</div>
				<div >{ this.state.temp }</div>
				<div >{ this.state.cond }</div>
				<div >feels like { this.state.feelslike }</div>
				<div >{ this.state.pop }%chanche of precipitation today</div>


					<div class={ style.details }></div>

				</div>
			);
		}

		getSearchResults(arg)
		{
			this.setState({ searchTerm : arg });
			this.fetchSearchResults();
		}

		setZmwFromSearch(arg)
		{
			this.setState({ zmw : arg });
			this.setJSON();
				console.log(this.state.zmw);
		}


		fetchSearchResults = () => {
			var url = "http://autocomplete.wunderground.com/aq?query="+this.state.searchTerm;
			console.log(url);
			$.ajax({
				url: url,
				dataType: "jsonp",
				jsonp: "cb",
				success : this.parseSearchList,
				error : function(req, err)
				{ console.log('API call failed ' + err);
					setTimeout(this.fetchSearchResults(), 500);
			 }
			})
		}


		parseSearchList = (parsed_json) => {
			this.setState({ searchList : parsed_json['RESULTS'] });
		}


	parseResponseConditions = (parsed_json) => {
		this.setState({
			currentJSON : parsed_json,
			current : "current"
		});
		this.fetchWeatherDataForecast();
	}

	parseResponseForecast = (parsed_json) => {
		this.setState({
			forecastJSON : parsed_json,
			current : "forecast"

		});
		this.handleTodayClick(0,0);
	}
}
