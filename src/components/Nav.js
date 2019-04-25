import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
// import { Globals } from "@/models/api";
const Globals = { user: null, oAuthUser: null };

export default ()=> (
     <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <img src={logo} className="App-logo" alt="logo" height="30" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link class="nav-link" to="/" active-class="active" exact>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about" active-class="active">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/MyFriends" active-class="active">My Friends</Link>
                    </li>
                </ul>
                { !Globals.user &&
                <form class="form-inline mt-2 mt-md-0">
                    <Link to="/Login" class="nav-link">Login</Link>
                    <Link to="/Register" class="nav-link">Sign Up</Link>
                </form>
                }
                { Globals.user &&
            <span class="navbar-text">
                <img width="30" src={`https://graph.facebook.com/${Globals.oAuthUser.id}/picture`} alt="facebook.img" />
                Welcome {Globals.user.firstName} {Globals.user.lastName}
            </span>
                }
            </div>
        </nav>
)

