import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";

const Meetings = () => {

  const [meetingsState, setMeetings] = useState([]);

  const fetchMeetings = () => {
    axios.get("http://localhost:8080/test/hello").then(res => {
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
      </div>
    )
  })
};

function App() {
  return (
    <div className="App">
      <Meetings />
    </div>
  );
}

// function App() {

//   const [count, setCount] = useState(5);

//   function decrementCount(){
//     setCount(prevCount => prevCount - 1); //function takes in value prevCount as previous value
//   }

//   function incrementCount(){
//     setCount(prevCount => prevCount + 1); //you can use any name instead of prevCount
//   }

//   return (
//     <div className="App">
//       <button onClick={decrementCount} >-</button>
//       <span>{count}</span>
//       <button onClick={incrementCount}>+</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
