import {
    put,
    call,
    take,
    select
} from 'redux-saga/effects';

import axios from "axios";
import { fetchedData, updateQuery } from "../actions/actions";

const fetchData = () => {
  console.log("fetching");
  return axios.get('http://52.34.191.81/events/test')
}

export function* doFetchData(){
  try{

    const response = yield call(fetchData);
    yield put(fetchedData(response.data));
  }catch(err){
    console.log(err)
  }

}

export function* searchUpdated(action){
  try{
    let query = action.payload;

    yield put(updateQuery(query));
  }catch(err){
    console.log(err);
  }
}
