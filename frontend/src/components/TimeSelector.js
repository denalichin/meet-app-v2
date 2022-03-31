import React, {Component, useState} from "react";


const TimeSelector = React.memo( function TimeSelector({setTimeFunction, htmlName, htmlId, defaultValue}) {


//htmlName, htmlId, defaultValue are prop values that are passed in from App.js
    let times = [
        {text: "12:00  AM"},  
        {text: "1:00  AM"},  
        {text: "2:00  AM"},  
        {text: "3:00  AM"},  
        {text: "4:00  AM"},  
        {text: "5:00  AM"}, 
        {text: "6:00  AM"}, 
        {text: "7:00  AM"}, 
        {text: "8:00  AM"}, 
        {text: "9:00  AM"},
        {text: "10:00  AM"}, 
        {text: "11:00  AM"}, 
        {text: "12:00  PM"}, 
        {text: "1:00  PM"}, 
        {text: "2:00  PM"}, 
        {text: "3:00  PM"}, 
        {text: "4:00  PM"}, 
        {text: "5:00  PM"}, 
        {text: "6:00  PM"},  
        {text: "7:00  PM"}, 
        {text: "8:00  PM"}, 
        {text: "9:00  PM"}, 
        {text: "10:00  PM"}, 
        {text: "11:00  PM"},
        {text: "12:00  AM"}
    ]

    const assignValue=(event)=>{
        setTimeFunction(event.target.value);
        console.log("selected", times[event.target.value].text, "for", htmlName);
    }

    return(
        <select key="asdjof" name={htmlName} id={htmlId} 
        onChange={(event) => assignValue(event)}>
            {/* Mapping through each object in our time array
          and returning an option element with the appropriate attributes / values.
         */}
            {times.map((t, index) => {
                if(index == defaultValue){
                    console.log("RENDERING TIME SELECTOR");
                    return <option key={"ts"+index} value={index} selected="selected">{t.text}</option>
                } else {
                    return <option key={"ts"+index} value={index}>{t.text}</option>
                }
            })
            }
        </select>
    )
}
);

export {TimeSelector};
