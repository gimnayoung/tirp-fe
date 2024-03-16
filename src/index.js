import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"; 
import store from "./reducer/store";
const GOOGLE_CLIENT_ID=process.env.REACT_APP_GOOGLE_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  </GoogleOAuthProvider>
);

reportWebVitals();