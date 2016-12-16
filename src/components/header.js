import { h, Component } from 'preact';
import { Link } from 'preact-router';

export default class Header extends Component {
	render() {
		return (
			<header class="header">
				<style jsx>{`
					.header {
						position: fixed;
						left: 0;
						top: 0;
						width: 100%;
						height: 56px;
						padding: 0;
						background: #673AB7;
						box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
						z-index: 50;
					}

					h1 {
						float: left;
						margin: 0;
						padding: 0 15px;
						font-size: 24px;
						line-height: 56px;
						font-weight: 400;
						color: #FFF;
					}

					nav {
						float: right;
						font-size: 100%;
					}

					a {
						display: inline-block;
						height: 56px;
						line-height: 56px;
						padding: 0 15px;
						min-width: 50px;
						text-align: center;
						background: rgba(255,255,255,0);
						text-decoration: none;
						color: #EEE;
						will-change: background-color;
					}

					a:hover, a:active {
						background: rgba(255,255,255,0.3);
					}
				`}</style>

				<h1>Preact App</h1>

				<nav>
					<Link href="/">Home</Link>
					<Link href="/profile">Me</Link>
					<Link href="/profile/john">John</Link>
				</nav>
			</header>
		);
	}
}
