import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  CheckIn, Header, Home, Login, MakeAppointment, Queue,
} from './components'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/CheckIn' element={<CheckIn/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/MakeAppointment' element={<MakeAppointment/>} />
        <Route path='/Queue' element={<Queue/>} />
        
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { default as Home } from './components/Home'