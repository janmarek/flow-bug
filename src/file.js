/* @flow */

var test = require('test');
var React = require('react');

test.testMethod('number'); // should be error

var Component = React.createClass(1); // should be error

var Component2 = React.createClass({ // should be ok
    render() {
        return <div>hi</div>;
    }
});
