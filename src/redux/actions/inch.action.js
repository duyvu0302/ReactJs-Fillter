import {GET_INCH} from '../constants';

export function setInch(params){
    return {
        type: GET_INCH,
        payload: params,
    }
}