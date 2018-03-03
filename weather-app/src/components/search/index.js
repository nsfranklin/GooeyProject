import { h, render, Component } from 'preact';
export default class Search extends Component
{
  handleChange(e)
  {
    const asd = e.target.value;
    this.props.ting(asd);
  }
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        <input onKeyup={ this.handleChange.bind(this) }></input>
        </div>
      </div>
    );
  }
}
