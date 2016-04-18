var SignUp = React.createClass({

  render(){

    return(
      <div>
        <div>
          <SignUpForm handleSubmit={this.props.handleSubmit}/>
        </div>
        <div>
          <h2>already have an account?</h2>
          <p><button onClick={this.props.handleToggle} className="custom-button">Sign-In</button></p>
        </div>
      </div>
    );
  }
});
