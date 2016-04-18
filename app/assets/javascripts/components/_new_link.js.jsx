var NewLink = React.createClass({

  handleClick(){
    var title = this.refs.title.value;
    var url = this.refs.url.value;

    $.ajax({
      url: '/api/v1/links',
      type: 'POST',
      data: { title: title, url_link: url },
      success: (response) => {
        this.props.getLinks();
      }
    });
  },

  render(){
    return(
      <div>
        <input ref='title' placeholder='Enter Title of Link' />
        <input ref='url' placeholder="Link Url" />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
});
