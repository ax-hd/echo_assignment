import React from "react";
import { connect } from "react-redux";

@connect((store)=>{
  if(store){

  }
  return{};
})
export default class Channel extends React.Component {
  constructor(){
    super();
  }

  render(){
    
    return(
      <li className="channel">
        {this.props.dataValue.name}
      </li>
    )
  }
}
