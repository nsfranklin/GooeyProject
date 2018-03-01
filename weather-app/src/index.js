import { h, render } from 'preact';
import './style';

let root;
function init() {
	let App = require('./components/phone').default;
	root = render(<App />, document.body);
}


init();
