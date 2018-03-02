// import preact
import { h, render, Component } from 'preact';
import phone from '../phone'

export default class Button extends Component {

	// rendering a function when the button is clicked
	render({clickFunction}) {
		if(!clickFunction){
			clickFunction = () => {
				console.log("passed something as 'clickFunction' that wasn't a function !");
			}
		}
		//phone.setState({date : this.props.number});
		return (
			<div>
				<button onClick={clickFunction}>
					{this.props.number}
				</button>
			</div>
		);
	}
}
