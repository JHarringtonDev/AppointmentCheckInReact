import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  CheckIn, Header, Home, Login, MakeAppointment, Queue,
} from './components'

import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";


function App() {
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

        {/* <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} /> */}
      </Routes>
    {/* </Router> */}
    </div>
  );
}

export default App;
