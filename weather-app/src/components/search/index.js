import { h, render, Component } from 'preact';
export default class Search extends Component
{
  constructor(props)
  {
    super(props);

  }
  handleChange(e)
  {
    const value = e.target.value;
    this.props.ting(value);
    this.state.items = this.props.other;
    console.log(value);
  }
  mappingF()
  {
    var items = this.props.other;
    var output = [];
    if(!this.isEmpty(items[0]))
    {
      for(var i = 0; i < items.length; i++) {output.push(<button onClick={ this.setZMW.bind(this,i) }> {items[i]['name']} </button>);}
    }

        return output;
  }
  setZMW(param,e)
  {
    console.log(this.props.other[param]['zmw']);
    this.props.setzmw(this.props.other[param]['zmw']);
  }
  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
        <input placeholder={ "Location name" } onKeyDown={ this.handleChange.bind(this) }></input>
          <h1>{this.props.text}</h1>
          <div>{ this.mappingF() }</div>
        <button onClick={this.props.closePopup}></button>

        </div>
      </div>
    );
  }
}
