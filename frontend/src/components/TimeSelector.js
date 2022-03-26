import React, {Component, useState} from "react";


export function TimeSelector({htmlName, htmlId}) {

    // const [htmlName, setHtmlName] = useState("default");

    console.log(htmlName);

    return(
        <select name={htmlName} id={htmlId}>
            <option>12:00  AM</option>  
            <option>1:00  AM</option>  
            <option>2:00  AM</option>  
            <option>3:00  AM</option>  
            <option>4:00  AM</option>  
            <option>5:00  AM</option> 
            <option>6:00  AM</option> 
            <option>7:00  AM</option> 
            <option>8:00  AM</option> 
            <option selected="selected">9:00  AM</option>
            <option>10:00  AM</option> 
            <option>11:00  AM</option> 
            <option>12:00  PM</option> 
            <option>1:00  PM</option> 
            <option>2:00  PM</option> 
            <option>3:00  PM</option> 
            <option>4:00  PM</option> 
            <option>5:00  PM</option> 
            <option>6:00  PM</option>  
            <option>7:00  PM</option> 
            <option>8:00  PM</option> 
            <option>9:00  PM</option> 
            <option>10:00  PM</option> 
            <option>11:00  PM</option>
            <option>12:00  AM</option>
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