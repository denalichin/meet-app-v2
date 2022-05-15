import React, { useEffect, useState, useMemo } from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";

import moment from 'moment';
import 'moment-timezone';
import {useNavigate, useParams} from "react-router-dom";

const registrationSubmit = (event) => {
    event.preventDefault(); //prevents page from refreshing
    alert("registration of the nations");


    // alert('Meeting Name:' +  meetingName + 
    // '\nStartime: ' + startTime + 
    // '\nEndtime: ' + endTime +
    // '\nTimezone: ' + timezone +
    // '\ndates: ' + JSON.toString(Array.from(serverCalendar))
    // );

    //defining our meeting object on the frontend to prepare for POST request
    const userObject = {
        username: "name",
        password: "temp_password",
        availability: {
        0: {
            availability: []
        }
        }
        
    }


    /*
    console.log("Created this object: \n", meetingObject);
    console.log("this here: ");

    // console.log(Array.from(serverCalendar.current));

    fetch("http://localhost:8080/meet-app/create", { //needs more security?
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(meetingObject)
    }).then(response => {
            if (!response.ok) {
            throw new Error('Network response was not OK');
            }
            return response;
        })
    .then(response => response.text())
    .then((response) => {
        console.log(response) //id of the object
        navigate("/register/" + response);
    }).catch(err => console.log(err))

 */

};

function UserRegistration() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {meetingId} = useParams();  
    
    return (  
        <div className="App">
            <h1>User Registration for {meetingId}</h1>
            <form onSubmit={registrationSubmit}>
                <label>Name: </label>
                <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}/>  {/* need onChange state never changes */}
                <br/>
                <label>password: (optional)</label>
                <input 
                type="text" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>  {/* need onChange state never changes */}
                <br/>

                <input type="submit" value="Next"/>
            </form>

        </div>
    )
}

export default UserRegistration;