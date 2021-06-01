import {GET_SEARCH_KEY} from '../constants';

export function setSearchKey(params){
    return {
        type: GET_SEARCH_KEY,
        payload: params,
    }
}