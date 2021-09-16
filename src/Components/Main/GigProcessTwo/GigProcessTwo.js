import React, { Component } from 'react'
import ProcessFormTwo from './ProcessFormTwo/ProcessFormTwo';



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


                {/* <div className="navbar-showcase my-cards">
                    <div ><span className="active" >All Gig </span><button className="btn">3404</button>
                    </div>
                    <div><span>My Gig </span><button className="btn">1200</button>
                    </div>
                    <div><span>Rejected Gig </span><button className="btn">100</button>
                    </div>
                </div> */}
                                {/* <Area/> */}
                                <ProcessFormTwo/>


            </div>

        )
    }
}
