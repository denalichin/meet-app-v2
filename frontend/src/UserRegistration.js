import React, { useEffect, useState, useMemo } from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";

import moment from 'moment';
import 'moment-timezone';
import {useNavigate, useParams} from "react-router-dom";

const registrationSubmit = (event) => {
    event.preventDefault();
    alert("registration of the nation");
};

function UserRegistration() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {meetingId} = useParams();  
    
    return (  
        <div className="App">
            <h1>User Registration for {meetingId}</h1>
            <form onSubmit={registrationSubmit}>
                <label>username: </label>
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