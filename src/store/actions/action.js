import axios from '../../axios-instance'
import * as actionTypes from './actionTypes';

export const starred = (quote) => ({
    type: actionTypes.STARRED,
    payload: quote
})

export const onquoteRequest = (dispatch) => {
    dispatch({type: actionTypes.REQUEST_QUOTE_PENDING})
    axios.get('Quotes.json')
    .then(response => {
        dispatch({type: actionTypes.REQUEST_QUOTE_SUCCESS, payload: response.data})
    }).catch(err => {
        dispatch({type: actionTypes.REQUEST_QUOTE_FAILURE, payload: err})
    })
}

export const onSomaliQuoteReq = (dispatch) => {
    dispatch({type: actionTypes.REQUEST_QUOTE_PENDING})
    axios.get('Somali.json')
    .then(response => {
        dispatch({type: actionTypes.REQUEST_QUOTE_SUCCESS, payload: response.data})
    }).catch(e => {
        dispatch({type: actionTypes.REQUEST_QUOTE_FAILURE, payload: e})
    })
}

export const onArabicQuoteReq = (dispatch) => {
    dispatch({type: actionTypes.REQUEST_QUOTE_PENDING})
    axios.get('Arabic.json')
    .then(response => {
        dispatch({type: actionTypes.REQUEST_QUOTE_SUCCESS, payload: response.data})
    }).catch(e => {
        dispatch({type: actionTypes.REQUEST_QUOTE_FAILURE, payload: e})
    })
}


export const darkMode = () => {
    return {
        type: actionTypes.DARK_MODE
    }
}

