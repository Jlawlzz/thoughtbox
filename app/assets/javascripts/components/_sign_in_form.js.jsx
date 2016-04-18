var SignInForm = React.createClass({

  handleSubmit(e){
    e.preventDefault();
    $.ajax({
      url: "/api/v1/sessions",
      type: 'POST',
      data: {username: this.refs.username.value,
             password: this.refs.password.value},
      success: () => {
        this.props.handleSubmit();
      }
    });
  },

  render(){

    return(
      <div className="sign-in-form">
        <h3>username:</h3>
        <form>
          <input
           defaultValue= ''
           ref='username'
           type='string'
           className="sign-in-field"
          />
        <h3>password:</h3>
          <input
           defaultValue= ''
           ref='password'
           type='string'
           className="sign-in-field"
          />
          <br></br>
          <p><button onClick={this.handleSubmit} className="custom-button">Sign-In</button></p>
        </form>
      </div>
    );
  }
});
