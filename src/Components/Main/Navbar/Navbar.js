import React, { Component } from 'react'
import './navbar.css';
import Logo1 from '../../../images/Icon-email.svg';
import Logo4 from '../../../images/Group-40-1.svg';
import Logo5 from '../../../images/Icon-settings.svg';
import Logo7 from '../../../images/user-icon.png';


export default class Navbar extends Component {


    render() {
        return (
            <div>
              <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-light p-4">
                    <ul className="mt-5">
                       <a href="/"> <li>Dashboard</li></a>
                       <a href="/"> <li>Gig</li></a>
                       <a href="/"> <li>Company</li></a>
                       <a href="/"> <li>Account</li></a>
                    </ul>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
            <div className="navbar my-navbar container">




                <div className="navbar-form ">
                    <form action="" method="post">
                        <input type="search" name="" id="" className="navbar-search" placeholder="search"/>
                    </form>
                </div>
                <div className="navbar-items">

                    <ul>
                        <span><img src={Logo4} className="App-logo" alt="logo" /></span>
                        <span><img src={Logo1} className="App-logo" alt="logo" /></span>
                        <span><img src={Logo5} className="App-logo" alt="logo" /></span>
                        <span><img src={Logo7} className="App-logo" alt="logo" /></span>
                    </ul>

                </div>
            </div>
            </div>
        )
    }
}
