import * as actionType from '../actions/actionTypes';

const initialStateStar = {
    xikmado: null,
    isPending: false,
    err: '',
    starred: [],
    dark: false
}

export const reducerStar = (state = initialStateStar, action = {}) => {
        switch(action.type) {
            case actionType.STARRED:
                const starred = [...state.starred]
                const duplicate = starred.filter(txt => txt === action.payload);
                if (duplicate.length < 1) {
                    return {
                        ...state,
                        starred: state.starred.concat(action.payload)
                    }
                }
                const rem = starred.filter(txt => txt !== action.payload);
                if(rem.length >= 0) {
                    return {
                        ...state,
                        starred: rem
                    }
                }
            break;
            case actionType.REQUEST_QUOTE_PENDING:
            return {
                ...state,
                isPending: true
            }
            case actionType.REQUEST_QUOTE_SUCCESS: 
            return {
                ...state,
                xikmado: action.payload,
                isPending: false
            }
            case actionType.REQUEST_QUOTE_FAILURE:
                return {
                    ...state,
                    err: action.payload
                }
            case actionType.DARK_MODE: 
                return {
                    ...state,
                    dark: !state.dark
                }
            default:
                return state
        }
    
}