import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import {
  CheckIn, Header, Home, MakeAppointment, Queue, LoginButton,
} from './components'
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import Login from './components/Login/Login';
import useToken from './components/useToken';
import ProtectedRoute from "./components/ProtectedRoute";

import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  // const { token, setToken } = useToken();
  // const[token,setToken] = useState(null)

  // const loggedIn = localStorage.getItem('token')
  
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className="App">
    {/* <Router> */}
      <Header />
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/CheckIn' element={<CheckIn/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/MakeAppointment' element={<MakeAppointment/>} />
        <Route path='/Queue' element={<Queue/>} />
        <Route path="/Dashboard" element={<Dashboard/>}/>
          




        
        {/* <Route path='/Preferences' element={<Preferences/>}/> */}

        {/* <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} /> */}
      </Routes>
    {/* </Router> */}
    </div>
  );
}

export default App;
