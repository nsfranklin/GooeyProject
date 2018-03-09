// import preact
import { h, render, Component } from 'preact';
import style from './style.less';
import Wicon from '../wicon';

export default class WeatherScroll extends Component {
	mappingT(){ //maps weather info for each our into an array and returns it as a formatted array
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
						{temp[i]['temp']['metric']} {<Wicon weatherstate={temp[i]['wx']}/>}  {hours.getHours() + ":00"}
					</div>
					);
				}
    }
        return output;
  }

	isEmpty(obj) {// checks if object is empty
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
	render(){//render the mapping for weather data by hour
        		return(
				<div class = {style.container}>
					{this.mappingT()}
				</div>
				);
    		}
}
