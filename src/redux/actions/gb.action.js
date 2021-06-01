import {GET_GB} from '../constants';

export function setGb(params){
    return {
        type: GET_GB,
        payload: params,
    }
}