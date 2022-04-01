import React, { Component } from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: ""
      }
    };
  }
  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };
 
  login = event => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "admin" && user_password === "123") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
    } else {
      alert("Access Denied")
    }
    event.preventDefault();
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Navigate to="/Dashboard" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.login} className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="user_id"
                onChange={this.handleFormChange}
                placeholder="Enter Username"
              />
              <input
                type="password"
                name="user_password"
                onChange={this.handleFormChange}
                placeholder="Enter Password"
              />
              <input type="submit" value="Login" />
            </div>
          </div>
          <p>user_id === "admin" && user_password === "123"</p>
        </form>
      </div>
    );
  }
}
export default Login;


// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import './Login.css';

// async function loginUser(credentials) {
//  return fetch('http://localhost:8080/login', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(credentials)
//  })
//    .then(data => data.json())
// }

// export default function Login({ setToken }) {

//   const [username, setUserName] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const token = await loginUser({
//       username,
//       password
//     });
//     setToken(token);
//   }

//   return(
//     <div className="login-wrapper">
//       <h1>Please Log In</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <p>Username</p>
//           <input type="text" onChange={e => setUserName(e.target.value)} />
//         </label>
//         <label>
//           <p>Password</p>
//           <input type="password" onChange={e => setPassword(e.target.value)} />
//         </label>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// };

// export default function Login(){

// const [errorMessages, setErrorMessages] = useState({});
// const [isSubmitted, setIsSubmitted] = useState(false);

// // User Login info
// const database = [
//   {
//     username: "user1",
//     password: "pass1"
//   },
//   {
//     username: "user2",
//     password: "pass2"
//   }
// ];

// const errors = {
//   uname: "invalid username",
//   pass: "invalid password"
// };

// const handleSubmit = (event) => {
//   //Prevent page reload
//   event.preventDefault();

//   var { uname, pass } = document.forms[0];

//   // Find user login info
//   const userData = database.find((user) => user.username === uname.value);

//   // Compare user info
//   if (userData) {
//     if (userData.password !== pass.value) {
//       // Invalid password
//       setErrorMessages({ name: "pass", message: errors.pass });
//     } else {
//       setIsSubmitted(true);
//     }
//   } else {
//     // Username not found
//     setErrorMessages({ name: "uname", message: errors.uname });
//   }
// };

// // Generate JSX code for error message
// const renderErrorMessage = (name) =>
//   name === errorMessages.name && (
//     <div className="error">{errorMessages.message}</div>
//   );

// // JSX code for login form
// const renderForm = (
//   <div className="form">
//     <form onSubmit={handleSubmit}>
//       <div className="input-container">
//         <label>Username </label>
//         <input type="text" name="uname" required />
//         {renderErrorMessage("uname")}
//       </div>
//       <div className="input-container">
//         <label>Password </label>
//         <input type="password" name="pass" required />
//         {renderErrorMessage("pass")}
//       </div>
//       <div className="button-container">
//         <input type="submit" />
//       </div>
//     </form>
//   </div>
// );

// return (
//   <div className="app">
//     <div className="login-form">
//       <div className="title">Sign In</div>
//       {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//     </div>
//   </div>
// );
// }