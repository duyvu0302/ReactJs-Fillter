import {GET_SORT_PRICE} from '../constants';

export function setSortPrice(params){
    return {
        type: GET_SORT_PRICE,
        payload: params,
    }
}