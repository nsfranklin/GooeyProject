// import preact
import { h, render, Component } from 'preact';
import style from './style';

export default class windD extends Component {

chooseIcon(arg) {
	switch(arg) {

		case "N":
			return <img class='icon' src="/assets/directions/n.png"/>;
			break;
		case "S":
			return <img class='icon' src="/assets/directions/s.png"/>;
			break;
		case "E":
			return <img class='icon' src="/assets/directions/e.png"/>;
			break;
		case "W":
			return <img class='icon' src="/assets/directions/w.png"/>;
			break;
		case "NE":
			return <img class='icon' src="/assets/directions/ne.png"/>;
			break;
		case "SE":
			return <img class='icon' src="/assets/directions/se.png"/>;
			break;
		case "SW":
			return <img class='icon' src="/assets/directions/sw.png"/>;
			break;
		case "NW":
			return <img class='icon' src="/assets/directions/nw.png"/>;
			break;
		case "NNE":
			return <img class='icon' src="/assets/directions/nne.png"/>;
			break;
		case "ENE":
			return <img class='icon' src="/assets/directions/ene.png"/>;
			break;
		case "ESE":
			return <img class='icon' src="/assets/directions/ese.png"/>;
			break;
		case "SSE":
			return <img class='icon' src="/assets/directions/sse.png"/>;
			break;
		case "SSW":
			return <img class='icon' src="/assets/directions/ssw.png"/>;
			break;
		case "WSW":
			return <img class='icon' src="/assets/directions/wsw.png"/>;
			break;
		case "WNW":
			return <img class='icon' src="/assets/directions/wnw.png"/>;
			break;
		case "NNW":
			return <img class='icon' src="/assets/directions/nnw.png"/>;
			break;
		default:
			return <img class='icon' src="/assets/directions/n.png"/>;
			break;
	}
}

mappingT(){
	var temp = new Array(24);
	var date = new Date();
	for(var x = 0; x < temp.length; x++)
	{
		temp[x] = this.props.dataf['hourly_forecast'][this.props.days*23+x];
	}
	var items = temp;
	var output = [];
	if(!this.isEmpty(temp[0]))
	{
			for(var i = 0; i < temp.length; i++)
			{
				date = new Date();
				var hours = new Date(date.setTime( date.getTime() + i * 3600000 ));
				output.push(
				<div>
					<p> {temp[i]['wspd']['metric']} </p>
					<p> {temp[i]['wdir']['dir']} </p>
					<p>{this.chooseIcon(temp[i]['wdir']['dir'])}</p>
					<p> {hours.getHours() + ":00"} </p>
				</div>
				);
			}
	}
			return output;
}

isEmpty(obj) {
	for(var key in obj) {
			if(obj.hasOwnProperty(key))
					return false;
	}
	return true;
}



render(){
			return(
				<div class = {style.container}>
					{this.mappingT()}
				</div>
			);
	}
}
