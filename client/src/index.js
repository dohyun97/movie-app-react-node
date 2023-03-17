import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/App';
import reportWebVitals from './reportWebVitals';
import {Provider}  from 'react-redux';
import {applyMiddleware} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from "./_reducers/index"
import NavBar from './components/views/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Provider store={createStoreWithMiddleware(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>  
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
