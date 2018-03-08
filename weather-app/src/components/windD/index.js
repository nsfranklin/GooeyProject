// import preact
import { h, render, Component } from 'preact';

export default class windD extends Component {

chooseIcon(arg) {
	switch(arg) {

		case "N":
			return <img src="/assets/directions/n.png"/>;
			break;
		case "S":
			return <img src="/assets/directions/s.png"/>;
			break;
		case "E":
			return <img src="/assets/directions/e.png"/>;
			break;
		case "W":
			return <img src="/assets/directions/w.png"/>;
			break;
		case "NE":
			return <img src="/assets/directions/ne.png"/>;
			break;
		case "SE":
			return <img src="/assets/directions/se.png"/>;
			break;
		case "SW":
			return <img src="/assets/directions/sw.png"/>;
			break;
		case "NW":
			return <img src="/assets/directions/nw.png"/>;
			break;
		case "NNE":
			return <img src="/assets/directions/nne.png"/>;
			break;
		case "ENE":
			return <img src="/assets/directions/ene.png"/>;
			break;
		case "ESE":
			return <img src="/assets/directions/ese.png"/>;
			break;
		case "SSE":
			return <img src="/assets/directions/sse.png"/>;
			break;
		case "SSW":
			return <img src="/assets/directions/ssw.png"/>;
			break;
		case "WSW":
			return <img src="/assets/directions/wsw.png"/>;
			break;
		case "WNW":
			return <img src="/assets/directions/wnw.png"/>;
			break;
		case "NNW":
			return <img src="/assets/directions/nnw.png"/>;
			break;
		default:
			return <img src="/assets/directions/n.png"/>;
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
				<div>
					<p>{this.mappingT()}</p>
				</div>
			);
	}
}
