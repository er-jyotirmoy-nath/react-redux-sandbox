var Link = ReactRouter.Link;


class Main extends React.Component {
    constructor(props){
    	super(props);
    	this.state = {};

    }
    render() {
        return (
            <div className="class-name">
                <Link to="/posts">Posts</Link> |
                <Link to="/addpost">Add Posts</Link>
                <hr/>
                {React.cloneElement(this.props.children,this.props)}
            </div>
        );
    }
}

function mapStateToProps(state) {
  return{
    posts:state.posts
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({addComments:addComments},dispatch)
}
const App = connect(mapStateToProps, mapDispatchToProps)(Main)
