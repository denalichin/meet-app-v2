import React, { useEffect, useState, useMemo } from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";

import moment from 'moment';
import 'moment-timezone';

import { TimeSelector } from "./components/TimeSelector.js";
import {TimezoneSelector} from "./components/TimezoneSelector.js";

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

  const [meetingName, setMeetingName] = useState("");
  const [startTime, setStartTime] = useState(9);
  const [endTime, setEndTime] = useState(17);
  const [timezone, setTimezone] = useState(moment.tz.guess()); //initialize to local timezone


  // const childFunc = React.useRef(null);

  const meetingSubmit = (event) => {

    // console.log("invoking child function");
    // childFunc.current(); //being called async?
    // setTimezone("HEELLLLLLOOOO");
    // console.log("finished invoking child function");


    event.preventDefault(); //prevents page from refreshing
    alert('Meeting Name:' +  meetingName + 
    '\nStartime: ' + startTime + 
    '\nEndtime: ' + endTime +
    '\nTimezone: ' + timezone
    );

    //defining our meeting object on the frontend to prepare for POST request
    const meetingObject = {
      name: meetingName,
      url: "temporary_for_now",
      timezone: timezone,
      startTime: startTime,
      endTime: endTime,
      startDate: "2022-01-01",
      endDate: "2022-11-11",
      users: {
        0: {
          username: "Blippy",
          password: "geronimo",
          availability: []
        }
      }
    }
    // console.log("Created this object: \n", meetingObject);

    fetch("http://localhost:8080/meet-app/create", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(meetingObject)
    }).then((res)=>{ //async function, this is the callback
      console.log('MEETING INSERTED: SERVER RESPONSE: \n', res);
    })
  }

  return (
    <div className="App">
      <form onSubmit={meetingSubmit}>
        <h1>Input Your Meeting Name</h1>
        <input 
          type="text" 
          value={meetingName} 
          onChange={(e) => setMeetingName(e.target.value)}/>  {/* need onChange state never changes */}
        <br/>
        <label for="start-time">No Earlier Than</label>
        <TimeSelector 
          setTimeFunction = {setStartTime}
          htmlName="start-time" 
          htmlId="start-time" 
          defaultValue={startTime}/>
        <br/>

        <label for="end-time">No Later Than</label>
        <TimeSelector 
          setTimeFunction = {setEndTime}
          htmlName="end-time" 
          htmlId="end-time" 
          defaultValue={endTime}/>
        <br/>

      {/* TEMPORARY, USE API CALL LATER?  AUTOSELECT TIMEZONE*/}
      <label for="timezone">Timezone:</label>
      <TimezoneSelector key="unique_value" setTimezoneFunction = {setTimezone}/>
      
        <br/>
        <input type="submit" value="Create Meeting"/>

      </form>

      <Meetings key="anothervalue" />
    </div>
  );
}

export default App;
