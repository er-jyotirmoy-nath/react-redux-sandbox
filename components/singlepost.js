

class Singlepost extends React.Component {
    constructor(props){
    	super(props);
    	
    }
    render() {
        return (
          <div className="col-sm-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src={this.props.post.thumbnailUrl} alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <Link to={"/viewpost/"+this.props.post.id} >{this.props.post.albumId}</Link>
              </h4>
              <p className="card-text">{this.props.post.title}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">★ ★ ★ ★ ☆</small>
            </div>
          </div>
          </div>
        );
    }
}
/*

*/
