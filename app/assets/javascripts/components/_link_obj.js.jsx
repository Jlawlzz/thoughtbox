var LinkObj = React.createClass({

  handleRead(){
    var readStatus = this.props.link.read_status = 'false' ? 'true' : 'false';

    $.ajax({
      url: '/api/v1/links/' + this.props.link.id,
      type: 'PATCH',
      data: { read_status: readStatus, title: this.props.link.title, url_link: this.props.link.url_link},
      success: () => {
        this.props.getLinks();
      }
    });
  },

  render(){

    readStatus = this.props.link.read_status === 'false' ? 'no' : 'yes';

    return(
      <div>
        <h2>title</h2>
        <h3>{this.props.link.title}</h3>
        <h2>url</h2>
        <h3>{this.props.link.url_link}</h3>
        <h2>Read?</h2>
        <h3>{readStatus}</h3>
        <button onClick={this.handleRead}>Toggle Read</button>
      </div>
    );
  }
});
