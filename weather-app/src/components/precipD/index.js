// import preact
import { h, render, Component } from 'preact';
	
export default class Details extends Component {

	constructor(props) {
	super(props);
	this.state = {precipChance: props.precipCurrent
		}
	}

	render() 
	{
	
        return (<div>
		<div><body>Precipitation Chance: {precipChance}</body></div>
		<div><body>
		</div>
               );
    }
}
