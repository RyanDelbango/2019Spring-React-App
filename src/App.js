import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nav from './components/Nav';
import About from './views/About';
import Friends from './views/MyFriends';

const Home = ()=> <h1>You are, yes you are home!!</h1>

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        
        <Route path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/MyFriends" component={Friends} />
      </Router>
    </div>
  );
}

export default App;
