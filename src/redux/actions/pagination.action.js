import {GET_PAGINATION} from '../constants';

export function setCurrentPage(params){
    return {
        type:  GET_PAGINATION,
        payload: params,
    }
}