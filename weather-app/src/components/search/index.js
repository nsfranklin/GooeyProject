import { h, render, Component } from 'preact';
import style from './style';

export default class Search extends Component
{
  constructor(props)
  {
    super(props);

  }
  handleChange(e)
  { //on change it calls the function from the parent and sets a state
    const value = e.target.value;
    this.props.ting(value); //it goes skrrraaa!
    this.state.items = this.props.other;
    console.log(value);
  }
  mappingF()
  { // maps each search result to an output and returns it
    var items = this.props.other;
    var output = [];
    if(!this.isEmpty(items[0]))
    {
      for(var i = 0; i < items.length; i++) {output.push(<button class={style.option} onClick={ this.setZMW.bind(this,i) }> {items[i]['name']} </button>);}
    }

        return output;
  }
  setZMW(param,e)
  {//calls the function that sets the zmw state in the parent component
    console.log(this.props.other[param]['zmw']);
    this.props.closePopup();
    this.props.setzmw(this.props.other[param]['zmw']);
  }
  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
  render() { // render the search bar with a close button and suggestions
    return (
      <div class={style.container}>
        <div class={style.searchContainer}>
        <div class = {style.searchbarcontainer}>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <input class={style.searchbar} placeholder={ "Location name" } onKeyDown={ this.handleChange.bind(this) }></input>
        <button class={style.closesearch} onClick={this.props.closePopup}><i class="material-icons">clear</i></button>
        </div>
          <h1>{this.props.text}</h1>
          <div class = {style.results}>{ this.mappingF() }</div>

        </div>
      </div>
    );
  }
}
