require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');

var Gallery = require('./components/gallery');

var images = [
	{
		url: "https://goo.gl/pt8hSb",
		description: "rasengan"
	},
	{
		url: "https://goo.gl/pt8hSb",
		description: "rasengan"
	},
	{
		url: "https://goo.gl/pt8hSb",
		description: "rasengan"
	},
	{
		url: "https://goo.gl/pt8hSb",
		description: "rasengan"
	}
]

ReactDOM.render(
	<Gallery images={images} />,
  	document.getElementById('app')
);

