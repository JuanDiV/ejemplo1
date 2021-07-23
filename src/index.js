import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Principal from './Principal';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


//import firebaseConfig from './firebase-config';
//import 'animate.css/animate.min.css'  
//import 'bootstrap/dist/css/bootstrap.min.css';

//import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'react-toastify/dist/ReactToastify.css';


//import {
 // FirebaseAppProvider
//} from 'reactfire'

ReactDOM.render(
  <React.StrictMode>
<Auth0Provider
      domain="dev-qbncf3j3.us.auth0.com"
      clientId="LymAwWiZEgAc35dWuiGklukym4IQV9KN"
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
