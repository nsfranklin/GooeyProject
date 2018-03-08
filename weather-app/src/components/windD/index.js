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
			return <img src="/assets/directions/test.png"/>;	
			break;
	}
}
	
	render() {
        return (
		<p>Current Wind Speed: {this.state.currentWindSpeed} Current Wind Direction: {this.chooseIcon()}</p>
               );
   	 }
}

