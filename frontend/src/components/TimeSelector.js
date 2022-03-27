import React, {Component, useState} from "react";


export function TimeSelector({
    setTimeFunction, htmlName, htmlId, defaultValue,}) {

    const [selectedValue, setSelectedValue] = useState(defaultValue);

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

    // console.log(htmlName);

    const assignValue=(event)=>{
        setSelectedValue(event.target.value);
        setTimeFunction(event.target.value);
        console.log("selected", times[event.target.value].text, "for", htmlName);
    }

    return(
        <select name={htmlName} id={htmlId} 
        onChange={(event)=>assignValue(event)}
        >
            {/* Mapping through each object in our time array
          and returning an option element with the appropriate attributes / values.
         */}
            {times.map((t, index) => {
                if(index == defaultValue){
                    return <option value={index} selected="selected">{t.text}</option>
                } else {
                    return <option value={index}>{t.text}</option>
                }
                    

                
            })
            }
        </select>
    )
}

// export class TimeSelector extends Component {

//     constructor (props){
//         super(props);
//             this.state = {
//                 test: "default"
//             };
//     }

//     updateState = (param) => {
//         console.log("setting param to ", param);
//         this.setState({test: param});
//     }

//     render(){

//         console.log("test: ", this.state.test);
//         return(
//         <div>
//         <h1> TIME SELECTOR</h1>
        // <select>
        //     <option>12:00  AM</option>  
        //     <option>1:00  AM</option>  
        //     <option>2:00  AM</option>  
        //     <option>3:00  AM</option>  
        //     <option>4:00  AM</option>  
        //     <option>5:00  AM</option> 
        //     <option>6:00  AM</option> 
        //     <option>7:00  AM</option> 
        //     <option>8:00  AM</option> 
        //     <option selected="selected">9:00  AM</option>
        //     <option>10:00  AM</option> 
        //     <option>11:00  AM</option> 
        //     <option>12:00  PM</option> 
        //     <option>1:00  PM</option> 
        //     <option>2:00  PM</option> 
        //     <option>3:00  PM</option> 
        //     <option>4:00  PM</option> 
        //     <option>5:00  PM</option> 
        //     <option>6:00  PM</option>  
        //     <option>7:00  PM</option> 
        //     <option>8:00  PM</option> 
        //     <option>9:00  PM</option> 
        //     <option>10:00  PM</option> 
        //     <option>11:00  PM</option>
        //     <option>12:00  AM</option>
        // </select>

//         </div>
           
//         );
//     }
// }