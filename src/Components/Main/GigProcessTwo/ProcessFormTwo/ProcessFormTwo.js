import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './processformone.css';


export default class ProcessFormOne extends Component {


    render() {
        return (
            <div className="col-md-10 process-form-one">
               <div className="row">
                    <div className="col-md-3 left pb-3">
                        <ul className="mt-4">
                                <li  className="mb-3">Basic Data</li>
                                <li className="active mb-3" >Renumeration</li>
                        </ul>
                    </div>
                    <div className="col-md-8 right">
                    <form>

                    <div className="row">
                    <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Salary</label>
                            <input type="text" class="form-control" id="" aria-describedby="emailHelp" placeholder="Minimum"/>
                    </div>
                    <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Company</label>
                            <input type="text" className="form-control" id="" aria-describedby="emailHelp" placeholder="Maximum"/>
                    </div>
                    </div>



                        <div className="form-check mt-5 pl-0 float-end">
                        <NavLink to="/newgig"><span> Back </span></NavLink>
                        
                        <NavLink to="/"><button type="submit" className="btn btn-primary continue ml-5">Add Gig</button></NavLink>

                        </div>

                        </form>
                    </div>
               </div>

            </div>
        )
    }
}
