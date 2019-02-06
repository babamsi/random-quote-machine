import axios from '../axios-instance'

export const STARRED = 'STARRED';
export const REQUEST_QUOTE_PENDING = 'REQUEST_QUOTE PENDING'
export const REQUEST_QUOTE_SUCCESS = 'REQUEST_QUOTE SUCCESS'
export const REQUEST_QUOTE_FAILURE = 'REQUEST_QUOTE FAILURE'

export const starred = (quote) => ({
    type: STARRED,
    payload: quote
})

export const onquoteRequest = (dispatch) => {
    dispatch({type: REQUEST_QUOTE_PENDING})
    axios.get('Quotes.json')
    .then(response => {
        dispatch({type: REQUEST_QUOTE_SUCCESS, payload: response.data})
    }).catch(err => {
        dispatch({type: REQUEST_QUOTE_FAILURE, payload: err})
    })
}