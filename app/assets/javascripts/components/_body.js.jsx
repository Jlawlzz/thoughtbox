var Body = React.createClass({

  getInitialState(){
    return { login: false, links: [], account: true };
  },

  toggleAccount(){
    console.log('done')
    var account = !this.state.account;
    this.setState({account: account});
  },

  toggleLogin(){
    var login = !this.state.login;
    this.setState({login: login});
    this.getLinks();
  },

  getLinks(){
    $.ajax({
      url: "/api/v1/links",
      type: 'GET',
      success: (response) => {
        this.setState({links: response});
      }
    });
  },

  render(){

    return(
      this.state.login ? <div><NewLink getLinks={this.getLinks} /><AllLinks links={this.state.links} getLinks={this.getLinks} /></div>
                       : <Login account={this.state.account}
                          toggleAccount={this.toggleAccount}
                          toggleLogin={this.toggleLogin}/>
    );
  }
});
