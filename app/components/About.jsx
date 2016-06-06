var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>This app is an example of a React built web app, styled with Foundation, that displays weather for a requested city.</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react/">Link to React</a>
				</li>
				<li>
					<a href="http://foundation.zurb.com/">Link to Foundation</a>
				</li>
			</ul>
		</div>
		)
};

module.exports = About;
