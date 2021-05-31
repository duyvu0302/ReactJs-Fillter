import {GET_PRICE} from '../constants';

export function setPrice(params){
    return {
        type: GET_PRICE,
        payload: params,
    }
}