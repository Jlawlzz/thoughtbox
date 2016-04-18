var links;
var AllLinks = React.createClass({

  render(){
    var getLinks = this.props.getLink;
    if (this.props.links){
      links = this.props.links.map(function(linkObj) {
        return (
          <div key={linkObj.id}>
            <LinkObj link={linkObj} />
          </div>
        );
      });
    }

    return(
      <div>
        {links}
      </div>
    );
  }
});
