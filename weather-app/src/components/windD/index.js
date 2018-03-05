// import preact
import { h, render, Component } from 'preact';
	
export default class windD extends Component {

	constructor(props) {
	super(props);
	this.state.currentWindSpeed = 22;
	this.state.currentWindDirection = "S";
	this.setState({display: true});
	}

chooseIcon() {

	switch(this.state.currentWindDirection) {
	
		case "N":
			return <img src="/assets/directions/n.svg"/>;
			break;
		case "S":
			return <img src="/assets/directions/s.svg"/>;		
			break;
		case "E":
			return <img src="/assets/directions/e.svg"/>;			
			break;
		case "W":
			return <img src="/assets/directions/w.svg"/>;			
			break;
		case "NE":
			return <img src="/assets/directions/ne.svg"/>;		
			break;
		case "SE":
			return <img src="/assets/directions/se.svg"/>;	
			break;
		case "SW":
			return <img src="/assets/directions/sw.svg"/>;			
			break;
		case "NW":
			return <img src="/assets/directions/nw.svg"/>;			
			break;
		case "NNE":
			return <img src="/assets/directions/nne.svg"/>;			
			break;
		case "ENE":	
			return <img src="/assets/directions/ene.svg"/>;		
			break;
		case "ESE":
			return <img src="/assets/directions/ese.svg"/>;			
			break;
		case "SSE":
			return <img src="/assets/directions/sse.svg"/>;		
			break;
		case "SSW":
			return <img src="/assets/directions/ssw.svg"/>;		
			break;
		case "WSW":
			return <img src="/assets/directions/wsw.svg"/>;			
			break;
		case "WNW":
			return <img src="/assets/directions/wnw.svg"/>;			
			break;
		case "NNW":
			return <img src="/assets/directions/nnw.svg"/>; 			
			break;
		default:
			return <img src="/assets/directions/test.svg"/>;	
			break;
	}
}
	
	render() {
        return (
		<p>Current Wind Speed: {this.state.currentWindSpeed} Current Wind Direction: {this.chooseIcon()}</p>
               );
   	 }
}

