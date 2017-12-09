
class Routeremp extends React.Component {
    componentWillMount() {
      console.log(window);
    }
    render() {
        return (
          <Provider store={store}>
            <Router history={historyobj}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/home" component={Home}></Route>
                <Route path="/user" component={User}></Route>
            </Route>
            </Router>
            </Provider>
        );
    }
}
ReactDOM.render(<Routeremp/>,document.getElementById('root'));
