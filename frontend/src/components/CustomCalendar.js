import React, {Component, useState, useEffect, useDebugValue, useRef} from "react";

import moment from 'moment';
import 'moment-timezone';

import "./CustomCalendar.css";

class CalendarObject{
    constructor(dayObject, isSelected){
        this.dayObject = dayObject;
        this.isSelected = isSelected;
    }
}

const CustomCalendar = React.memo( function CustomCalendar({serverCalendar, setServerCalendar}) {
    const currentDate = moment(); //get current date
    const startDay = currentDate.clone().startOf("month").startOf("week"); //start day of calendar for current view
    const endDay = currentDate.clone().endOf("month").endOf("week"); //end day of calendar for current view
    const [calendar, setCalendar] = useState([]); //this manages the calendar that we see on frontend, holds all the data

    const tempServerCalendar = useRef(new Set());//this is the data that gets sent to server

    const mouseDown = useRef(0); //used to detec whether mouse is being held down
    const selectMode = useRef(true); //used to tell whether we should select/unselect everything we drag







    //initializes frontend calendar with correct dates
    useEffect(() => { //this code doesn't execute for every refresh, used for initialization, runs after render is committed to screen
        let cal = []; //temporary calendar
        const day = startDay.clone().subtract(1, "day"); //iterator
        while(day.isBefore(endDay, "day")) { //isbefore takes in a day and an interval which is "day"
            cal.push( //pushing rows (arrays) of 7 items for each week
                Array(7).fill(0).map(()=> (new CalendarObject(day.add(1,"day").clone(), false)))
            )
        }
        setCalendar(cal);

        // document.addEventListener('mousedown', handleMouseDown); //detect mouse up and down
        // document.addEventListener('mouseup', handleMouseUp);

        return () => { //this is run when component is being unmounted
            //good practice to remove event listeners when you no longer need them
            // document.removeEventListener('mousedown', handleMouseDown);
            // document.removeEventListener('mouseup', handleMouseUp);
            console.log("UNMOUNTING");
        }

    },[]); //use effect will only be called if state in the [] is modified. Since we don't want it to be called again, leave the [] blank

    const handleMouseDown = (event) => {
        if(event.button === 0){ //make sure left mouse button clicked
            mouseDown.current = mouseDown.current + 1;
            console.log("++mouseDown to: " + mouseDown.current);
        } 
    };

    const handleMouseUp = (event) => {
        if(event.button === 0){ //make sure left mouse button released
            mouseDown.current = mouseDown.current - 1;
            console.log("--mouseDown to: " + mouseDown.current);
        } 
    }
    //for drag to select, this sets whether we are selecting everything we drag or unselecting everything we drag


    const setSelectionMode = (event, weekIndex, index) => {
        // console.log("first click" + tempServerCalendar[weekIndex][index]);
        console.log(calendar[weekIndex][index].isSelected);

        if (event.buttons === 1) {   //check mouse down
            if(calendar[weekIndex][index].isSelected){
                selectMode.current = false;
            } else{
                selectMode.current = true;
            }
    
            handleToggle(weekIndex, index); //temporary
            // if tempServerCalendar[weekIndex][index].
        }  
        
    };


    const handleToggle = (weekIndex, index) => {
        console.log(weekIndex , " ", index);
        let cal = [...calendar]; //makes a new array. If we didn't have the [...] it would just be a reference to the original
        //the ... spreads out the contents of the array, so we are pulling out the contents of calendar but putting it back into []
        //since the reference/address never changes, even though we change the contents of array, React doesn't register it as a change
        
        if(selectMode.current){ //if we are selecting it, add to set of selected days to send to server
            //since we are using a set, its fine if we add an existing day since set doesn't allow duplicates anyways
            tempServerCalendar.current.add(cal[weekIndex][index].dayObject.format("YYYY-MM-DD").toString()); //.current is needed as it grabs the reference
        } else{
            tempServerCalendar.current.delete(cal[weekIndex][index].dayObject.format("YYYY-MM-DD").toString()); //.current is needed as it grabs the reference
        }

        if(selectMode.current){
            cal[weekIndex][index].isSelected = true;
        } else{
            cal[weekIndex][index].isSelected = false;
        }
        
        setServerCalendar(tempServerCalendar.current); //set the backend calendar
        setCalendar(cal); //controlls frontend calendar

        // console.log(calendar[weekIndex][index].dayObject.format("D") + ": " + calendar[weekIndex][index].isSelected);
        // console.log(serverCalendar);
    };

    //https://github.com/pablofierro/react-drag-select/blob/master/lib/Selection.js
    const handleMouseDrag = (event, weekIndex, index) => {
        console.log("entered " + weekIndex +  " " + index + " mouse=", event.buttons);
          
        // if (mouseDown.current) { //if left click is being pressed
        if (event.buttons === 1) {   //check mouse down
            handleToggle(weekIndex, index); //temporary
        }  
    };


    return(
        // <p>CALENDAR: {startDay.format("MM/DD") + " , " + endDay.format("MM/DD") } </p>
        <div className = "calendar-container">
            <div className="calendar">
                <p>{currentDate.format('MMMM')}</p>
                {calendar.map((week, weekIndex) => (
                    <div className="week" key={weekIndex}>
                        {
                            week.map((CalendarObj, index) => (
                                <div key={index} className={`day ${calendar[weekIndex][index].isSelected ? 'selected' : ''}`} 
                                    onMouseEnter ={(event) => {handleMouseDrag(event, weekIndex, index)}} //drag to select (WIP)
                                    onMouseDown={(event) => {setSelectionMode(event, weekIndex, index)}} //clicking the first element
                                >
                                    <div className="inner-day">
                                    {/* className={`form-control round-lg ${this.state.valid ? '' : 'error'}`} */}
                                        {CalendarObj.dayObject.format("D").toString()}
                                    </div>
                                </div>)
                            )
                        }
                    </div>
                ))

                }
            </div>
        </div>
    )

});

export {CustomCalendar};