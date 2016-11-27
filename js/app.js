import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux"
import SearchBar from "./components/SearchBar";
import store from "./store";
import { fetchData } from "./actions/actions";
import Notification from "./components/Notification";
import Event from "./components/Event";
@connect((store)=>{
  if(store){

    const result = store.result;
    const live = store.live;
    return {result: result, live: live}
  }
  else {
    return {}
  }
})
class App extends React.Component {
  constructor(){
    super();
    this.title="Echo ~";
  }

  componentWillMount(){
    this.props.dispatch(fetchData());
  }

  render(){
    let events = [];
    if(this.props.result){
      events = this.props.result.map((result, i)=> <Event key={i} backgroundImage={result.photo} hashtags={result.tags} channels={result.channels} timesAndPlaces={result.venues_times}/>);
    }
    let liveClass = this.props.live && this.props.live.live ? "notification-drop":""
    return(
      <div id="app">
        <SearchBar elementId="txt-search-bar"/>
        <Notification className={liveClass} dataText="Going Live"/>
        {events}
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, app);
