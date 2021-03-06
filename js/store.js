import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';

import reducer from "./reducers/reducer";
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducer,{data:{}, test:"TEST"}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
