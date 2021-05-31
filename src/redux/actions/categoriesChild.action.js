import {GET_CATEGORIES_CHILD} from '../constants';

export function setCategoriesChild(params){
    return {
        type: GET_CATEGORIES_CHILD,
        payload: params,
    }
}