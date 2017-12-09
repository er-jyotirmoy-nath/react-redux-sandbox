class User extends React.Component {

    render() {
        return (
            <div classNameName="className-name">
                <h1>Add Posts</h1>
                <form >
                <div className="form-group">
                  <label for="email">User id:</label>
                  <input type="text" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label for="pwd">Post Title:</label>
                  <input type="text" className="form-control" id="pwd" />
                </div>
                <div className="form-group">
                  <label for="comment">Post Body:</label>
                  <textarea className="form-control" rows="5" id="comment"></textarea>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
        );
    }
}
