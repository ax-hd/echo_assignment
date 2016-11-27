import React from "react";

export default class Notification extends React.Component {
  constructor(){
    super();
  }

  render(){

    return(
      <div className={"notification-container "+this.props.className}>
        <div className="notification-message">
          {this.props.dataText}
        </div>
      </div>
    );
  }
}
