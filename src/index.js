import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';


import App from './app.jsx';
import Test from './components/test';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import './index.css';

import myReducer from './redux/reducers';
import mySaga from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const myStore = createStore(myReducer, applyMiddleware(...[sagaMiddleware,logger]));
sagaMiddleware.run(mySaga);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
        <App/>
        {/* <Test/> */}
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
