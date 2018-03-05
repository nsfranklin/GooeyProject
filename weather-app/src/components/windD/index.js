// import preact
import { h, render, Component } from 'preact';
	
export default class windD extends Component {

	constructor(props) {
	super(props);
	this.state.currentWindSpeed = 22;
	this.state.currentWindDirection = "NNE";
	this.setState({display: true});
	}

chooseIcon(parma, dirNum) {

	switch(dirNUM) {
	
		case 0:
			var result = <i class="wi wi-wind wind-from-n"></i>;
			return;
			break;
		case 1:
			var result = <i class="wi wi-wind wind-from-s"></i>;
			return;			
			break;
		case 2:
			var result = <i class="wi wi-wind wind-from-e"></i>;
			return;			
			break;
		case 3:
			var result = <i class="wi wi-wind wind-from-w"></i>;
			return;			
			break;
		case 4:
			var result = <i class="wi wi-wind wind-from-ne"></i>;
			return;			
			break;
		case 5:
			var result = <i class="wi wi-wind wind-from-se"></i>;
			return;			
			break;
		case 6:
			var result = <i class="wi wi-wind wind-from-sw"></i>;
			return;			
			break;
		case 7:
			var result = <i class="wi wi-wind wind-from-nw"></i>;
			return;			
			break;
		case 8:
			var result = <i class="wi wi-wind wind-from-nne"></i>;
			return;			
			break;
		case 9:	
			var result = <i class="wi wi-wind wind-from-ene"></i>;
			return;			
			break;
		case 10:
			var result = <i class="wi wi-wind wind-from-ese"></i>;
			return;			
			break;
		case 11:
			var result = <i class="wi wi-wind wind-from-sse"></i>;
			return;			
			break;
		case 12:
			var result = <i class="wi wi-wind wind-from-ssw"></i>;
			return;			
			break;
		case 13:
			var result = <i class="wi wi-wind wind-from-wsw"></i>;
			return;			
			break;
		case 14:
			var result = <i class="wi wi-wind wind-from-wnw"></i>;
			return;			
			break;
		case 15:
			var result = <i class="wi wi-wind wind-from-nnw"></i>;
			return; 			
			break;
		default:
			var result = <i class="wi"></i>;
			return;	
			break;
	}
}

	directionNum(param, currentWindDirection) {
		var WindCodes = ["N","S","E","W","NE","SE","SW","NW","NNE","ENE","ESE","SSE","SSW","WSW","WNW","NNW"];

		for(i = 0 ; i < 16 ; i++)
		{
			if(dir == WindCodes[i])
			{
				return i;
			}
		}
	}
	
	render() {
        return (
		<p>Current Wind Speed: {this.state.currentWindSpeed} Current Wind Direction: {<i class="wi wi-wind wind-from-nnw"></i>}</p>
               );
   	 }
}

