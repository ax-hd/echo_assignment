export function search(query){
  return {
    type: "SEARCH",
    query: query
  }
}

export function fetchData(){
  return {
    type: "FETCH_DATA"
  }
}

export function fetchedData(data){
  return {
    type: "FETCHED_DATA",
    payload: data
  }
}

export function searchParameterUpdated(query){
  return {
    type: "SEARCH_UPDATED",
    payload: query
  }
}

  export function updateQuery(query){
    return {
      type: "UPDATE_QUERY",
      payload: query
    }
  }

  export function optionSelected(indices){
    return {
      type: "OPTION_SELECTED",
      payload: indices.split(',')
    }
  }

  export function goLiveAction(live){
    return{
      type: "GO_LIVE",
      payload: {live: live}
    }
  }
