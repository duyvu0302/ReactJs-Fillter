import {GET_PRODUCT_LENGTH} from '../constants';

export function getProductLength(params){
    return {
        type: GET_PRODUCT_LENGTH,
        payload: params,
    }
}