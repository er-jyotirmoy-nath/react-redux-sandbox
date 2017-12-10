

class Posts extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {};
    console.log(props);
  }
    render() {
        return (
            <div className="class-name">
                <h2>All Posts</h2>
                <hr/>
                <div className="row">
                  {this.props.posts.map((post) => {
                    return <Singlepost  post={post}  />
                  })}
                </div>

            </div>
        );
    }
}
