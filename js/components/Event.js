import React from "react";
import _ from "lodash";
import eventSelector from "../selectors/selector";
import { connect } from "react-redux";
import Hashtag from "./event_components/Hashtag"
import Channel from "./event_components/Channel"
import TimeAndPlace from "./event_components/TimeAndPlace"
import { goLiveAction } from "../actions/actions"

@connect((store)=>{
  if(store){
    let data = eventSelector(store);

    return{
      filteredData: data
    }
  }
})
export default class EchoEvent extends React.Component {
  constructor(){
    super();
  }
  goLive(event){
    this.props.dispatch(goLiveAction(true));
    setTimeout(()=>this.props.dispatch(goLiveAction(false)), 6000);

  }
  render(){
    let hashtags = this.props.hashtags.map((value, idx) =>
              <Hashtag key={idx} dataValue={value}/>
            );
    let channels = this.props.channels.map((value, idx)=>
              <Channel key={idx} dataValue={value}/>
            );
    let timeAndPlace = this.props.timesAndPlaces.map((value, idx)=>
              <TimeAndPlace key={idx} dataValue={value}/>
            );
            
    return(
      <div className="dv-event-container" style={{backgroundImage:'url('+this.props.backgroundImage+')'}}>
        <ul id="ul-hashtags">
          {hashtags}
        </ul>
        <ul id="ul-channel">
          {channels}
        </ul>
        <ul id="ul-time-place">
          {timeAndPlace}
        </ul>
        <div className="button-panel">
          <button className="button edit-button">EDIT</button>
          <button className="button live-button" onClick={(event)=>this.goLive(event)}>LIVE</button>
        </div>
      </div>
    );
  }
}
