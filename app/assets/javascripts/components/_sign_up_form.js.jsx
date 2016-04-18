var SignUpForm = React.createClass({

  handleSubmit(e){
    e.preventDefault();
    $.ajax({
      url: "/api/v1/users",
      type: 'POST',
      data: {username: this.refs.username.value,
             password: this.refs.password.value,
             email: this.refs.email.value},
      success: () => {
        this.props.handleSubmit();
      }
    });
  },

  render(){

    return(
      <div className="sign-up-form">
        <h3>username:</h3>
        <form>
          <input
           defaultValue= ''
           ref='username'
           type='string'
           className="sign-up-field"
          />
        <h3>password:</h3>
          <input
           defaultValue= ''
           ref='password'
           type='string'
           className="sign-up-field"
          />
        <h3>email:</h3>
          <input
            defaultValue= ''
            ref='email'
            type='string'
            className="sign-up-field"
          />
        <br></br>
         <p><button onClick={this.handleSubmit} className="custom-button">Sign-Up</button></p>
        </form>
      </div>
    );
  }
});
