import React from "react";
import { connect } from "react-redux";

@connect((store)=>{
  if(store){

  }
    return{};
})
export default class Hashtag extends React.Component {
  constructor(){
    super();
  }

  render(){

    return(
      <li className="hashtag">
        {'#'+this.props.dataValue.name}
      </li>
    )
  }
}
