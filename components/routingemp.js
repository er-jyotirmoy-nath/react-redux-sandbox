
class Routeremp extends React.Component {
    componentWillMount() {
      
    }
    render() {
        return (
          <Provider store={store}>
            <Router history={historyobj}>
            <Route path="/" component={App}>
                <IndexRoute component={Posts} />
                <Route path="/posts" component={Posts}></Route>
                <Route path="/addpost" component={Addpost}></Route>
                <Route path="/viewpost/:id" component={Viewpost}></Route>
            </Route>
            </Router>
            </Provider>
        );
    }
}
ReactDOM.render(<Routeremp/>,document.getElementById('root'));
