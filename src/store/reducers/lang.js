import * as actionTypes from '../actions/actionTypes';

const initialState = {
    lang: ''
}

const reducerLang = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LANG_CHANGE:
        const lang = action.payload;
            return {
                ...state,
                lang: lang
            }
        default:
            return state
    }
}

export default reducerLang