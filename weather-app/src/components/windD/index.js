// import preact
import { h, render, Component } from 'preact';
	
export default class Details extends Component {

	constructor() {
	super();
	this.state = {currentWindSpeed: 22 //props.currentWindSpeed,
		currentWindDirection: "NNE"//props.currentWindDirection,
		}
	}
	
	var direction = this.state.currentWindDirection;
	
	


	render() 
	{
	
        return (<div>
		<div><body>Current Wind Speed: {currentWindSpeed}</body></div>
		<div><body>Current Wind Direction: {currentWindDirection}</body></div>
		</div>
               );
    }
}

function chooseIcon(dirNum) {

	switch(dirNUM) {
	
		case 0:
			var result = <i class="wi wi-wind wind-from-n"></i>;
			return 
			break;
		case 1:
			var result = <i class="wi wi-wind wind-from-s"></i>;
			return 			
			break;
		case 2:
			var result = <i class="wi wi-wind wind-from-e"></i>;
			return 			
			break;
		case 3:
			var result = <i class="wi wi-wind wind-from-w"></i>;
			return 			
			break;
		case 4:
			var result = <i class="wi wi-wind wind-from-ne"></i>;
			return 			
			break;
		case 5:
			var result = <i class="wi wi-wind wind-from-se"></i>;
			return 			
			break;
		case 6:
			var result = <i class="wi wi-wind wind-from-sw"></i>;
			return 			
			break;
		case 7:
			var result = <i class="wi wi-wind wind-from-nw"></i>;
			return 			
			break;
		case 8:
			var result = <i class="wi wi-wind wind-from-nne"></i>;
			return 			
			break;
		case 9:	
			var result = <i class="wi wi-wind wind-from-ene"></i>;
			return 			
			break;
		case 10:
			var result = <i class="wi wi-wind wind-from-ese"></i>;
			return 			
			break;
		case 11:
			var result = <i class="wi wi-wind wind-from-sse"></i>;
			return 			
			break;
		case 12:
			var result = <i class="wi wi-wind wind-from-ssw"></i>;
			return 			
			break;
		case 13:
			var result = <i class="wi wi-wind wind-from-wsw"></i>;
			return 			
			break;
		case 14:
			var result = <i class="wi wi-wind wind-from-wnw"></i>;
			return 			
			break;
		case 15:
			var result = <i class="wi wi-wind wind-from-nnw"></i>;
			return 			
			break;
		default:
			var result = <i class="wi"></i>;
			return 			
			break;
	}
}

function directionNum(dir){
	var WindCodes = {"N","S","E","W","NE","SE","SW","NW","NNE","ENE","ESE","SSE","SSW","WSW","WNW","NNW"}

	for(i = 0 ; i < 16 ; i++)
	{
		if(dir == WindCodes[i];
		return i;
	}
}
