import {GET_BRAND} from '../constants';

export function setBrand(params){
    return {
        type: GET_BRAND,
        payload: params,
    }
}