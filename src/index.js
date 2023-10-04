import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import reduxStore from "../src/redux/store";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import 'react-multi-carousel/lib/styles.css';

const store = createStore(
  reduxStore,
  compose(composeWithDevTools(applyMiddleware(thunk)))
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <Router>
        <App />
      </Router></Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
