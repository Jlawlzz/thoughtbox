var Login = React.createClass({

  handleToggle(e){
    e.preventDefault();
    this.props.toggleAccount();
  },

  handleSubmit(){
    console.log('here')
    this.props.toggleLogin();
  },

  render(){
    return(
      this.props.account ? <div><SignIn handleToggle={this.handleToggle} handleSubmit={this.handleSubmit}/></div>
                         : <div><SignUp handleToggle={this.handleToggle} handleSubmit={this.handleSubmit}/></div>
    );
  }
});
