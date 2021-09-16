import React, { Component } from 'react';
import Logo from '../../images/logo.svg';
import Logo1 from '../../images/Icon-home-fill.svg';
import Logo2 from '../../images/Icon-person-fill.svg';
import Logo3 from '../../images/Icon-npm-fill.svg';
import Logo4 from '../../images/Icon-briefcase-fill.svg';
import './sidebar.css';
import { BrowserRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



export default class sidebar extends Component {

    render() {
        return ( <
            div className = "sidebar" >
            <
            BrowserRouter >

            <
            NavLink to = "/" > < img src = { Logo }
            className = "app-logo"
            alt = "logo" / > < /NavLink> <
            ul className = "mt-5" >
            <
            a href = "/" > < li > < img src = { Logo1 }
            className = ""
            alt = "logo" / > Dashboard < /li></a >
            <
            a href = "/" > < li > < img src = { Logo4 }
            className = ""
            alt = "logo" / > Gig < /li></a >
            <
            a href = "/" > < li > < img src = { Logo3 }
            className = ""
            alt = "logo" / > Company < /li></a >
            <
            a href = "/" > < li > < img src = { Logo2 }
            className = ""
            alt = "logo" / > Account < /li></a >
            <
            /ul> <
            /BrowserRouter>

            <
            /div>
        )
    }
}