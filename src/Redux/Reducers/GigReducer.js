import { ActionTypes } from "../Constants/ActionTypes";


const initialState = {

    gigs: [


    ],

};

const GigReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case ActionTypes.SET_GIG:
        return {...state, gigs:payload };

    default:
        return state
    }
}


export default GigReducer;



