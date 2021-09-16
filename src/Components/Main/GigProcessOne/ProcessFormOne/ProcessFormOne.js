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
                                <li className="active mb-3" >Basic Data</li>
                                <li>Renumeration</li>
                        </ul>
                    </div>
                    <div className="col-md-8 right">
                    <form>

                    <div className="row">
                    <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Role</label>
                            <input type="text" className="form-control" id="" aria-describedby="emailHelp" placeholder="Product Designer"/>
                    </div>
                    <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Company</label>
                            <input type="text" className="form-control" id="" aria-describedby="emailHelp" placeholder="TM30"/>
                    </div>
                    </div>


                    <div className="row mt-4">
                    <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Location</label>
                            <input type="text" class="form-control" id="" aria-describedby="emailHelp" placeholder="Country"/>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="exampleInputEmail1"></label>

                            <input type="text" className="form-control" id="" aria-describedby="emailHelp" placeholder="State/Region"/>
                    </div>
                    </div>


                    <div className="row mt-3">

                    <div className="form-group col-md-12">
                            <input type="text" className="form-control" id="" aria-describedby="emailHelp" placeholder="Address"/>
                    </div>
                    </div>


                    <div className="row mt-3">

                    <div className="form-group col-md-12">
                    <label htmlFor="exampleInputEmail1">Add Tag</label>

                            <input type="text" className="form-control tag" id="" aria-describedby="emailHelp" placeholder="Add More Tag"/>
                    </div>
                    </div>



                        <div className="tag-list mt-3 pl-0">
                            <span>Suggested Tags:</span>
                            <span>Full Time</span>
                            <span>Contract</span>
                            <span>Freelance</span>
                        </div>


                        <div className="form-check mt-2 pl-0 float-end">
                        <NavLink to="/"><span> Cancel </span></NavLink>
                        
                        <NavLink to="/renumeration"><button type="submit" className="btn btn-primary continue ml-5">Continue</button></NavLink>

                        </div>

                        </form>
                    </div>
               </div>

            </div>
        )
    }
}
