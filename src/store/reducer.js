import * as actionType from './action';

const initialStateStar = {
    xikmado: null,
    isPending: false,
    err: '',
    starred: []
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
            default:
                return state
        }
    
}


// export const quotesReducer = (state = initialStateQuote, action = {}) => {
//     switch(action.type) {
//         case actionType.REQUEST_QUOTE_PENDING:
//             return {
//                 ...state,
//                 isPending: true
//             }
//         case actionType.REQUEST_QUOTE_SUCCESS: 
//             return {
//                 ...state,
//                 xikmado: action.payload,
//                 isPending: false
//             }
//         case actionType.REQUEST_QUOTE_FAILURE:
//             return {
//                 ...state,
//                 err: action.payload
//             }
//         default:
//             return {
//                 state
//             }
//     }
// }