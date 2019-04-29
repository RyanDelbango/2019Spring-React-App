import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
// import { Globals } from "@/models/api";
const Globals = { user: null, oAuthUser: null };

export default ()=> (
     <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <img src={logo} className="App-logo" alt="logo" height="30" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/" activeClassName="active" exact>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" activeClassName="active">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/MyFriends" activeClassName="active">My Friends</Link>
                    </li>
                </ul>
                { !Globals.user &&
                <form className="form-inline mt-2 mt-md-0">
                    <Link to="/Login" className="nav-link">Login</Link>
                    <Link to="/Register" className="nav-link">Sign Up</Link>
                </form>
                }
                { Globals.user &&
            <span className="navbar-text">
                <img width="30" src={`https://graph.facebook.com/${Globals.oAuthUser.id}/picture`} alt="facebook.img" />
                Welcome {Globals.user.firstName} {Globals.user.lastName}
            </span>
                }
            </div>
        </nav>
)

