import React, { Component } from "react";
import { Navigate, Switch, Route, Link } from "react-router-dom";
// import { withRouter } from "react-router";
import "./Logout.css";
// import Master from "./Master";
// import Pos from "./Pos";
// import IndexLogout from "./IndexLogout";
// import NotFound from "./404";
class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Navigate to="/login" />;
    }
    const { match } = this.props;
    return (
      <div>
            <button onClick={this.signOut} href="#">
              Sign Out
            </button>
        <main role="main">
        </main>
      </div>
    );
  }
}
 
export default Logout;