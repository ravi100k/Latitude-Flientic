var React = require('react');
var Preview = require('Preview');
var Registration = React.createClass({

  getInitialState:function()
  {
    return {Name:'',mobile:'',email:'',upload:'', tkt:'', menu:'',SelectOptions:[]};
  },
  handleNameChange: function(e) {
    this.setState({Name: e.target.value});
  },
  handlemobileChange: function(e) {
    this.setState({mobile: e.target.value});
  },
  handleemailChange: function (e) {
    this.setState({email:e.target.value});
  },
  handleuploadChange: function(e){
    this.setState({upload:e.target.value});
  },
  handletktChange: function(e){
    this.setState({tkt:e.target.value});
  },
  handlemenuChange: function(e){
    this.setState({UnitsofBlood:e.target.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var repoDbObj ={
      name : this.state.Name,
      mobile : this.state.mobile,
      email : this.state.email,
      upload : this.state.upload,
      tkt: this.state.tkt,
      res : this.state.menu
    };

    var url="http://localhost:8085/register/AddData";
    $.ajax({
      url:url,
      type:'POST',
      data:repoDbObj,

      success:function(data){
        console.log(data);
      },
      error:function(err){
        console.log(err);
      }
    });
    alert('Form Submited!')
    this.setState({Name:'',mobile:'',email:'',upload:'', tkt:'', menu:''});
  },
  handlePreview: function(){
    var url="http://localhost:8085/register/GetData";
    $.ajax({
      url:url,
      type:'GET',
      success:function(data){
        console.log(data);
        this.setState({SelectOptions:data});
      }.bind(this),
      error:function(err){
        console.log(err);
      }.bind(this)
    });
  },

  render: function () {
    var {SelectOptions} = this.state;
    return(
      <div>
        <div className="page-title">
          <h1>Event Registration </h1>
        </div>
        <div >
          Full Name  <input type = 'text' placeholder='e.g.: Ravi Kumar' value={this.state.Name} onChange={this.handleNameChange} required/>
        Mobile      <input type ='number' placeholder='+91' value={this.state.mobile} min='10' onChange={this.handlemobileChange}required/>
      Email      <input type ='email' placeholder='ravi@ravi.com' value={this.state.email} onChange={this.handleemailChange}required />
    Upload Id Card<input type ='file' accept="image/*" placeholder='.jpeg or png' value={this.state.file} onChange={this.handleuploadChange}required/>
  Registration Type
  <select  value={this.state.menu} onChange={this.handlemenuChange}>
    <option value="Self">Self</option>
    <option value="Admin">Admin</option>
    <option value="Other">Other</option>
  </select>
  Number of Tickets<input type ='number' placeholder='+91' value={this.state.tkt}  maxLength="100" onChange={this.handletktChange}required/>
<button className="button expanded" onClick={this.handleSubmit}>Submit</button>
<Preview result={SelectOptions}/>
<button className="button expanded" onClick={this.handlePreview}>Preview</button>
</div>
</div>
);
}
});
module.exports= Registration;
