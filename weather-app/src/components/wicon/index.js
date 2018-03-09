// import preact
import { h, render, Component } from 'preact';
import style from './style';

export default class Wicon extends Component {
chooseIcon() {
    switch(this.props.weatherstate) { //switch to get correct icons

        case "Clear":
            return <img class='icon' src="/assets/weathericons/sunny-day.png"/>;
            break;
        case "Partly Cloudy":
            return <img class='icon' src="/assets/weathericons/partialy-cloudy.png"/>;
            break;
        case "Mostly Cloudy":
            return <img class='icon' src="/assets/weathericons/overcast-day.png"/>;
            break;
	case "Overcast":
            return <img class='icon' src="/assets/weathericons/overcast-day.png"/>;
            break;
        case "Cloudy":
            return <img class='icon' src="/assets/weathericons/cloudy-day.png"/>;
            break;
        case "Hazy":
            return <img class='icon' src="/assets/weathericons/smog.png"/>;
            break;
        case "Foggy":
            return <img class='icon' src="/assets/weathericons/foggy.png"/>;
            break;
        case "Very Hot":
            return <img class='icon' src="/assets/weathericons/hot-weather.png"/>;
            break;
        case "Very Cold":
            return <img class='icon' src="/assets/weathericons/cold.png"/>;
            break;
        case "Blowing Snow":
            return <img class='icon' src="/assets/weathericons/snow-cloud.png"/>;
            break;
        case "Chance of Showers":
            return <img class='icon' src="/assets/weathericons/drizzle.png"/>;
            break;
        case "Showers":
            return <img class='icon' src="/assets/weathericons/drizzle.png"/>;
            break;
        case "Chance of Rain":
            return <img class='icon' src="/assets/weathericons/drizzle.png"/>;
            break;
        case "Rain":
            return <img class='icon' src="/assets/weathericons/rainy-day.png"/>;
            break;
        case "Chance of a Thunderstorm":
            return <img class='icon' src="/assets/weathericons/lighting.png"/>;
            break;
        case "Thunderstorm":
            return <img class='icon' src="/assets/weathericons/lighting.png"/>;
            break;
        case "Flurries":
            return <img class='icon' src="/assets/weathericons/snow-cloud.png"/>;
            break;
        case "Chance of Snow Showers":
            return <img class='icon' src="/assets/weathericons/snow-cloud.png"/>;
            break;
        case "Chance of Snow":
            return <img class='icon' src="/assets/weathericons/snow-cloud.png"/>;
            break;
        case "Snow":
            return <img class='icon' src="/assets/weathericons/snow-cloud.png"/>;
            break;
        case "Chance of Ice Pellets":
            return <img class='icon' src="/assets/weathericons/hail.png"/>;
            break;
        case "Ice Pellets":
            return <img class='icon' src="/assets/weathericons/hail-storm.png"/>;
            break;
        case "Blizzard":
            return <img class='icon' src="/assets/weathericons/blizzard.png"/>;
            break;
        default:
            return <img class='icon' src="/assets/weathericons/sunny-day.png"/>;
            break;
    }
}

render(){//returns and renders
            return(
                    <div class={style.iconcolour}>
                    {this.chooseIcon()}
                    </div>

            );
    }
}
