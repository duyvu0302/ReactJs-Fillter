import {GET_PRODUCT_LIST_SUCCESS,
     GET_PRODUCT_LIST_FAIL,
     GET_BOX,
     GET_CATEGORIES,
     GET_PRICE,
     GET_RATING,
     GET_BRAND,
     GET_CATEGORIES_CHILD
    } from '../constants';

const initialState = {
    productList : [],
    rating:'',
    price: [],
    box: [],
    brand:[],
    categories:"",
    categoriesChild:"",
}

export default function productReducer (state = initialState, action){
    switch (action.type) {
        case GET_PRODUCT_LIST_SUCCESS: {
            return {
                ...state,
                productList:[
                    ...action.payload
                ],
            }
        }
        case GET_BOX:{
            return{
                ...state,
                box:[
                    ...action.payload
                ],
            }
        }
        case GET_BRAND:{
            return{
                ...state,
                brand:[
                    ...action.payload
                ],
            }
        } 
        case GET_CATEGORIES:{
            return{
                ...state,
                categories: action.payload
            }
        }
        case GET_CATEGORIES_CHILD:{
            return{
                ...state,
                categories:action.payload
                   
            }
        }
        case GET_PRICE:{
            return {
                ...state,
                price:[
                    ...action.payload
                ]
            }
        }
        case GET_RATING:{
            return {
                ...state,
                rating:action.payload
            }
        }
        case GET_PRODUCT_LIST_FAIL:{
            return state
        }
        default:{
            return state;
        }
    }
}