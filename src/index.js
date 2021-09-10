import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import data from './data.json';
import CardList from './components/CardList';
import Quotes from "./components/Quotes";
import logo3 from "./assets/img/logo3.png";


//import Gambar from './assets/img/nil.gif';
const quotes = "Don't Forget to Streaming NCT 127 the 3rd Album 'Sticker' ";


//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList data={data} />
    <Quotes 
    author="Fangirl NCT Garis Keras :)" 
    quotes={quotes} 
    image={logo3}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
