
class Addpost extends React.Component {
    constructor(props){
    	super(props);
    	this.state = {};

    }
    addPost(e){
      e.preventDefault();
      console.log(this.props);
      this.props.addComments(this.refs.albumId.value,this.refs.title.value,this.refs.link.value);
    }
    render() {
        return (
            <div classNameName="col-lg-6">
                <h1>Add Posts</h1>
                <form onSubmit={this.addPost.bind(this)}>
                <div className="form-group">
                  <label for="email">User id:</label>
                  <input type="text" className="form-control" ref="albumId" />
                </div>
                <div className="form-group">
                  <label for="pwd">Post Title:</label>
                  <input type="text" className="form-control" ref="title" />
                </div>
                <div className="form-group">
                  <label for="comment">Album Link:</label>
                  <input type="text" className="form-control" ref="link" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
        );
    }
}
