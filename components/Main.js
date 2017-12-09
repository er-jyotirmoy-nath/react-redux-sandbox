var Link = ReactRouter.Link;


class Main extends React.Component {
    constructor(props){
    	super(props);
    	this.state = {};
      console.log(this.props.posts);
    }
    render() {
        return (
            <div className="class-name">
                <Link to="/home">Home</Link> |
                <Link to="/user">User</Link>
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
  return bindActionCreators(addComments,dispatch)
}
const App = connect(mapStateToProps, mapDispatchToProps)(Main)
