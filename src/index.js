import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import CoinsPage1 from './components/CoinsLists/CoinsPage1'
import CoinsPage2 from './components/CoinsLists/CoinsPage2'
import CoinsPage3 from './components/CoinsLists/CoinsPage3'
import CoinsPage4 from './components/CoinsLists/CoinsPage4'

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);

  const App = () => (
    <div className="App">
      <Navbar />
      <Charts coinData={coinData} />
    </div>
  )

  return (
    <>
    <Route exact path="/" component={App} />
    <Route path="/coins/1" component={CoinsPage1} />
    <Route path="/coins/2" component={CoinsPage2} />
    <Route path="/coins/3" component={CoinsPage3} />
    <Route path="/coins/4" component={CoinsPage4} />
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  rootElement
);
