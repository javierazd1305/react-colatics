import React from "react";
import "./App.css";
import Home from "./components/Home/index";
import Feature from "./components/Feature/index";
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/feature" strict component={Feature} />
      </Router>
    </div>
  );
}

export default App;
