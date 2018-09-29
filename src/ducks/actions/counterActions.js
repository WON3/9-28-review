import axios from 'axios';

export const INCREASE_COUNTER = "INCREASE_COUNTER";
export const DECREASE_COUNTER = "DECREASE_COUNTER";
export const GET_COUNTER = "GET_COUNTER";

export function add(number){
    const response = axios.patch('/api/increase', {number}).then(resp => resp.data.counter)
    
    return {
        type: INCREASE_COUNTER,
        payload: response
    }
}


export function subtract(number){
    const response = axios.patch('/api/decrease', {number}).then(resp => resp.data.counter)
    return {
        type: DECREASE_COUNTER,
        payload: response
    }
}

export function getCounter(){
    const response = axios.get('/api/counter').then(resp => resp.data.counter)
    return {
        type: GET_COUNTER,
        payload: response
    }
}