// import preact
import { h, render, Component } from 'preact';
import style from './style.less';

export default class WeatherScroll extends Component {
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
						{temp[i]['temp']['metric']} {temp[i]['wx']}  {hours.getHours() + ":00"}
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
