import * as actionTypes from './actionTypes';

export const langChange = (lang) => {
    return {
        type: actionTypes.LANG_CHANGE,
        payload: lang
    }
}