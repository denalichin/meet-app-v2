import React, { useEffect, useState, useMemo } from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";

import Home from "./Home";

import moment from 'moment';
import 'moment-timezone';

const Meetings = () => {

  const [meetingsState, setMeetings] = useState([]); //this is the state that will store meeting object

  const fetchMeetings = () => {
    axios.get("http://localhost:8080/meet-app").then(res => {
      console.log("https request returned")
      console.log(res);
      setMeetings(res.data);
    });
  }

  useEffect(() => {
    fetchMeetings();
  }, []);

  return meetingsState.map((meetingData, index) => {
    return (
      <div key={index}>
          <h1>{meetingData.name}</h1>
          <p>{meetingData.url}</p>

          {meetingData.users.map((userdata, userIndex) => { //submapping to map out users objects
            return(
              <div key = {userIndex}>
                <p>{userdata.username}</p>
                <p>{userdata.availability}</p>
              </div>
            )
          })}
      </div>
    )
  })
};



function App() {

  return (

    <Home/>
  );
}

export default App;
