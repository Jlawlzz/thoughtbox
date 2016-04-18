var SignIn = React.createClass({

  render(){

    return(
      <div>
        <div>
          <SignInForm handleSubmit={this.props.handleSubmit}/>
        </div>
        <div>
          <h2>dont have an account?</h2>
          <p><button onClick={this.props.handleToggle} className="custom-button">Sign-Up</button></p>
        </div>
      </div>
    );
  }
});
