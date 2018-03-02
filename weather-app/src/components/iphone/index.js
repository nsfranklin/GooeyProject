// import preact
import {h,render,Component} from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';

export default class Iphone extends Component {
    //var Iphone = React.createClass({

    // a constructor with initial set states
    constructor(props) {
        super(props);
        // temperature state
        this.state.temp = "";
        // button display state
        this.setState({
            display: true
        });
    }

    // a call to fetch weather data via wunderground
    fetchWeatherData = () => {
        // API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
        var url = "http://api.wunderground.com/api/c1e566bc4ad7a174/conditions/q/UK/London.json";
        $.ajax({
            url: url,
            dataType: "jsonp",
            success: this.parseResponse,
            error: function (req, err) {
                console.log('API call failed ' + err);
            }
        })
        // once the data grabbed, hide the button
        this.setState({
            display: false
        });
    }

    // the main render method for the iphone component
    render() {
        // check if temperature data is fetched, if so add the sign styling to the page
        const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;

        // display all weather data
        return (
          <div class = {style.container} >
          <div class = {style.header} >
          <div class = {style.city} > {this.state.locate} < /div>
          <div class = {style.conditions} > {this.state.cond} < /div>
          <div class = {style.conditions} > {this.state.wind} < /div>
          <div class = {style.conditions} > {this.state.chance} < /div>
          <div class = {style.conditions} > {this.state.humidity} < /div>
          <div class = {style.conditions} > {this.state.feels} < /div>
          <span class = {tempStyles} > {this.state.temp} < /span> </div>
          <div class = {style.details} > < /div>
          <div class = {style_iphone.container} >
          {this.state.display ? < Button class = {style_iphone.button} clickFunction = {this.fetchWeatherData}/ > : null }
          </div>
        </div>
            );
        }

        parseResponse = (parsed_json) => {
            var location = parsed_json['current_observation']['display_location']['city'];
            var temp_c = parsed_json['current_observation']['temp_c'];
            var conditions = parsed_json['current_observation']['weather'];
            var wind_kph = parsed_json['current_observation']['wind_kph'];
            var precip_today_string = parsed_json['current_observation']['precip_today_string'];
            var relative_humidity = parsed_json['current_observation']['relative_humidity'];
            var wind_dir = parsed_json['current_observation']['wind_dir'];
            var feelslike_c = parsed_json['current_observation']['feelslike_c'];

            // set states for fields so they could be rendered later on
            this.setState({
                locate: location,
                temp: temp_c,
                cond: conditions,
                wind : wind_kph,
                chance : precip_today_string,
                humidity : relative_humidity,
                wind_dir : wind_dir,
                feels : feelslike_c
            });
        }
    }
