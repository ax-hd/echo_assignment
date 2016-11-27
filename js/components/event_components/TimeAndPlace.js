import React from "react";
import { connect } from "react-redux";

@connect((store)=>{
  if(store){

  }
    return{};
})
export default class TimeAndPlace extends React.Component {
  constructor(){
    super();
  }

  render(){

    const options = {
      year: "numeric", month: "short",day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    let times = this.props.dataValue.times.map((value,idx) =>
      <div key={idx}>
        <span>{new Date(value.start).toLocaleTimeString("en-us",options)}</span> <span>{new Date(value.end).toLocaleTimeString("en-us",options)}</span>
      </div>
    );
    return(
      <li className="time-and-place">
        <div>
          <span>{this.props.dataValue.venue.name}</span>
        </div>
        {times}
      </li>
    )
  }
}
