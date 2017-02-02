var React = require('react');
var Nav = require('Nav');
var Registration = require('Registration');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="column small-centered medium-4 large-6">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
