import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from './home';
import Profile from './profile';

export default class App extends Component {
	render() {
		return (
			<div class="app">
				<style jsx>{`
					:global(body) {
						height: 100%;
						width: 100%;
						padding: 0;
						margin: 0;
						background: #FAFAFA;
						font-family: 'Helvetica Neue', arial, sans-serif;
						font-weight: 400;
						color: #444;
						-webkit-font-smoothing: antialiased;
						-moz-osx-font-smoothing: grayscale;
					}

					:global(*) {
						box-sizing: border-box;
					}

					.app {
						height: 100%;
					}
				`}</style>

				<Header />

				<Router>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
