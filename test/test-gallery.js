var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Gallery = require('../js/components/gallery');

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
];

describe('Gallery component', function() {
    it('Renders the gallery with correct class name and # of images',  function() {
        var renderer = TestUtils.createRenderer();
        renderer.render(<Gallery images={images} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery');

        result.props.children.length.should.equal(4);

        let firstImg = result.props.children[0];
        firstImg.props.description.should.equal('rasengan');
    });
});