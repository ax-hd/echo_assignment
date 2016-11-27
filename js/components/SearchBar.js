import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { searchParameterUpdated, optionSelected} from "../actions/actions";

@connect((store)=>{
  if(store){
    return {
      suggestions: store.suggestions
    }
  }
  else {
    return {}
  }
})
export default class SearchBar extends React.Component {
  constructor(){
    super();
  }

  handleChange(event){
    this.props.dispatch(searchParameterUpdated(event.target.value));
  }

  handleSelect(event){
    this.props.dispatch(optionSelected(event.target.getAttribute('data-index')));
    this.props.dispatch(searchParameterUpdated(""));
  }

  render(){
    const suggestionList = this.props.suggestions !== undefined ? this.props.suggestions : [];
    const expandedClass = suggestionList.length === 0 ? "collapsed" : "expanded";
    const suggestions = suggestionList.length !== 0 ? suggestionList.map((suggestion, i) => <li key={i} onClick={event => this.handleSelect(event)} data-index={suggestion.index} className="li-suggestion">{suggestion.word}</li>) : [];
    return(
      <div className="dv-search-container">
        <input type='text' onChange={(event)=>this.handleChange(event)} id={this.props.elementId} className={this.props.className} />
        <ul className={expandedClass} id="ul-suggestions-container">
          {suggestions}
        </ul>
      </div>
    );
  }
}
//data-index={suggestion.index.reduce((accumulator, value, index, array)  =>  accumulator+","+index)}
