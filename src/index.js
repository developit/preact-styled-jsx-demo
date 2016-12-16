import { h, render } from 'preact';

Object.defineProperty(h().constructor.prototype, 'props', { enumerable:true, get(){ return this.attributes; } });

let root;
function init() {
	let App = require('./components/app').default;
	root = render(<App />, document.body, root);
}
init();

// HMR:
if (module.hot) module.hot.accept('./components/app', init);
