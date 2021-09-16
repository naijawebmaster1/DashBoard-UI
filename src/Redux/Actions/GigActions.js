import { ActionTypes } from "../Constants/ActionTypes";


const setGig = (gigs) =>{
    return{
        type: ActionTypes.SET_GIG,
        payload: gigs
    };
};

export default setGig;