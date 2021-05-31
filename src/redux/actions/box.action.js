import {GET_BOX} from '../constants';

export function setBox(params){
    return {
        type: GET_BOX,
        payload: params,
    }
}