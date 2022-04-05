import React, { useEffect, useState, useMemo } from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";

import moment from 'moment';
import 'moment-timezone';
import {useNavigate, useParams} from "react-router-dom";

function UserPortal() {
    let {userid} = useParams();
    
    return (  
        <div className="App">
            <h1>User Portal for {userid}</h1>
        </div>
    )
}

export default UserPortal;