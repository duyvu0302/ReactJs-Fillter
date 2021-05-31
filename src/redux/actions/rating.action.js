import {GET_RATING} from '../constants';

export function setRating(params){
    return {
        type: GET_RATING,
        payload: params,
    }
}