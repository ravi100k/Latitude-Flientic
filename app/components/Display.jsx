var React = require('react');

var Display = React.createClass({
    render:function(){
        var camper = this.props.data;
        return(
            <tr >
                <td>{camper.Name}</td>
                <td>{camper.mobile}</td>
                <td>{camper.email}</td>
                <td>{camper.upload}</td>
                <td>{camper.tkt}</td>
                <td>{camper.menu}</td>
            </tr>
        );
    }
});
module.exports = Display;
