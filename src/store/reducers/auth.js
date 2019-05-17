import * as actionTypes from '../actions/actionTypes'

const initialState = {
    auth: ''
}


const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_AUTH:
            return {
                ...state,
                auth: action.payload
            }
        default:
            return state
    }
}

export default authReducer