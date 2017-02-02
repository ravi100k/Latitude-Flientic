var React = require('react');
var Display = require('Display');

var Preview = React.createClass({

  render: function(){

  //var result = this.props.result;

   var result = this.props.result.map(function(result,index){
            return
            <Display key={index} data={result}/>
            });
    return (
    <div>
    {result}
    </div>
    )}
});

module.exports = Preview;
