import React, {Component, useState, useEffect, useDebugValue} from "react";

import moment from 'moment';
import 'moment-timezone';

import "./CustomCalendar.css";

class CalendarObject{
    constructor(dayObject, isSelected){
        this.dayObject = dayObject
        this.isSelected = isSelected;
    }


    
}

const CustomCalendar = React.memo( function CustomCalendar({}) {
    const currentDate = moment(); //get current date
    const startDay = currentDate.clone().startOf("month").startOf("week"); //start day of calendar for current view
    const endDay = currentDate.clone().endOf("month").endOf("week"); //end day of calendar for current view
    const [calendar, setCalendar] = useState([]);

    
    

    useEffect(() => { //this code doesn't execute for every refresh
        let cal = []; //temporary calendar
        const day = startDay.clone().subtract(1, "day"); //iterator
        while(day.isBefore(endDay, "day")) { //isbefore takes in a day and an interval which is "day"
            cal.push( //pushing rows (arrays) of 7 items for each week
                Array(7).fill(0).map(()=> (new CalendarObject(day.add(1,"day").clone(), false)))
            )
        }
        setCalendar(cal);
    },[]); //use effect will only be called if state in the [] is modified

    const handleToggle = (weekIndex, index) => {
        console.log(weekIndex , " ", index);
        let cal = [...calendar]; //makes a new array. If we didn't have the [...] it would just be a reference to the original
        //the ... spreads out the contents of the array, so we are pulling out the contents of calendar but putting it back into []
        //since the reference/address never changes, even though we change the contents of array, React doesn't register it as a change
        cal[weekIndex][index].isSelected = !cal[weekIndex][index].isSelected;
        setCalendar(cal);
        console.log(calendar[weekIndex][index].isSelected);
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
                                <div key={index} className={`day ${calendar[weekIndex][index].isSelected ? 'selected' : ''}`} onClick={() => {handleToggle(weekIndex, index)}}>
                                    <div class="inner-day">
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