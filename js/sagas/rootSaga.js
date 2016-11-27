import { takeLatest } from 'redux-saga';
import { doFetchData, searchUpdated } from './workerSagas'

export default function* rootSaga(){
  yield [
    takeLatest('FETCH_DATA', doFetchData),
    takeLatest('SEARCH_UPDATED', searchUpdated)
  ];
}
