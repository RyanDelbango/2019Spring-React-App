import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nav from './components/Nav';

const Home = ()=> <h1>You are, yes you are home!!</h1>
const About = ()=> <h1>I teach the best Web Course at New Paltz!</h1>
const Friends = ()=> (<ul>
  <li>You guys</li>
  <li>All student</li>
  </ul>)

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
