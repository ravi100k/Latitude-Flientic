var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({


  render: function () {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
             Latitude App
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">About Us</IndexLink>
          </li>
          <li>
            <Link to="/Registration" activeClassName="active-link">Registration</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="right"><Link to= './LoginComponent'></Link></li>
          <li className="menu-text">
            Created by <a href="https://github.com/ravi100k/" target="_blank">Ravi Kumar</a>
          </li>
        </ul>
      </div>
    </div>
  );
  }
});

module.exports = Nav;
