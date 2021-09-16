import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import GigProcessOne from './GigProcessOne/GigProcessOne';
import GigProcessTwo from './GigProcessTwo/GigProcessTwo';
import NavbarShowcase from './NavbarShowcase/NavbarShowcase';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './main.css';



export default class main extends Component {

    render() {
        return (
            <div className="main">
                <BrowserRouter>
                <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={NavbarShowcase} />
                    <Route path='/newgig' component={GigProcessOne} />
                    <Route path='/renumeration' component={GigProcessTwo} />

                </Switch>
                </div>
                </BrowserRouter>

            </div>
        )
    }
}
