import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toastr.css'
import './App.css';
import Nav from './components/Nav';
import About from './views/About';
import Friends from './views/MyFriends';
import Login from './views/Login';

const Home = ()=> <h1>You are, yes you are home!!</h1>

function App() {
  const [user, setUser ] = React.useState(null);
  const [oAuthUser, setoAuthUser] = React.useState(null);
  //{id:"", FirstName:"", LastName:""}
  function login(m){
    setoAuthUser(m.response2 || { });
    setUser(m.x.user);
  }

  return (
    <div className="App">
      <Router>
      <Nav user={user} oAuthUser={oAuthUser} />        
        <Route path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/MyFriends" render={()=> <Friends user={user} />}  />
        <Route path="/Login"  render={props=> <Login {...props} user={user} login={login} />}  />
      </Router>
    </div>
  );
}

export default App;
