import React, { useEffect, useState, useMemo } from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";

import Home from "./Home";
import UserPortal from "./UserPortal";

import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

function App() {

  return (
      <Router>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/create"> UserPortal </Link>
        </nav>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/create' element={<UserPortal/>} />
          <Route path='/create/:userid' element={<UserPortal/>} />
          {/* <Link to="/">
            <Home />
          </Link>
          <Link to="/create">
            <UserPortal />
          </Link> */}
        </Routes>
      </Router>
  );
}

export default App;
