import React, { Component } from 'react'
import ProcessFormOne from './ProcessFormOne/ProcessFormOne';
import './GigProcessOne.css';



export default class Navbar extends Component {


    render() {
        return (
            <div className="navbar-showcase-main my-navbar-showcase-main">
                <div className="navbar-showcase pt-100">
                    <div className="navbar-form">
                        <h1>Gig</h1>
                    </div>
                    <div className="navbar-items">

                    </div>



                </div>

<br/>

                                <ProcessFormOne/>


            </div>

        )
    }
}
