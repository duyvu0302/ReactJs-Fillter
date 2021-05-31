import {GET_CATEGORIES} from '../constants';

export function setCategories(params){
    return {
        type: GET_CATEGORIES,
        payload: params,
    }
}