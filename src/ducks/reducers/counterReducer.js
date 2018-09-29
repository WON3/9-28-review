import {INCREASE_COUNTER, DECREASE_COUNTER, GET_COUNTER} from '../actions/counterActions'

const initialState = {
    counter : 0
}

export default function counterReducer(state = initialState, action){
    switch(action.type){
        case INCREASE_COUNTER + '_FULFILLED' :
        case DECREASE_COUNTER  + '_FULFILLED':
        case GET_COUNTER  + '_FULFILLED':
            return {...state, counter: action.payload}
        default:
            return state
    }
}