import { h, Component } from 'preact';

export default class Home extends Component {
	render() {
		return (
			<div class="home">
				<style jsx>{`
					.home {
						padding: 56px 20px;
						min-height: 100%;
						width: 100%;
					}
				`}</style>

				<h1>Home</h1>

				<p>This is the Home component.</p>
			</div>
		);
	}
}
