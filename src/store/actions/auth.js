import * as actionTypes from './actionTypes'

export const storeAuth = (auth) => ({
    type: actionTypes.STORE_AUTH,
    payload: auth
})
