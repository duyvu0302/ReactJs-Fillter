import {
    GET_PRODUCT_LIST_SUCCESS,
    GET_PRODUCT_LIST_FAIL,
    GET_PRODUCT_LENGTH_SUCCESS,
    GET_PRODUCT_LENGTH_FAIL,
    GET_BOX,
    GET_CATEGORIES,
    GET_PRICE,
    GET_RATING,
    GET_BRAND,
    GET_CATEGORIES_CHILD,
    GET_GB,
    GET_INCH,
    GET_SORT_PRICE,
    GET_SEARCH_KEY,
    GET_PAGINATION
    } from '../constants';

const initialState = {
    productList : [],
    rating:"",
    price: [],
    box: [],
    brand:[],
    categories:"",
    categoriesChild:"",
    gb:"",
    inch:"",
    sortPrice:"",
    searchKey:"",
    productLength:"",
    currentPage:1

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
        case GET_SEARCH_KEY:{
            return{
                ...state,
                searchKey:action.payload
            }
        }
        case GET_PAGINATION:{
            return{
                ...state,
                currentPage:action.payload
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
        case GET_GB:{
            return{
                ...state,
                gb:action.payload
            }
        }
        case GET_SORT_PRICE:{
            return{
                ...state,
                sortPrice:action.payload
            }
        }
        case GET_INCH:{
            return {
                ...state,
                inch:action.payload
            }
        }
        case GET_PRODUCT_LENGTH_SUCCESS:{
            return {
                ...state,
                productLength:action.payload
            }
        }
        case GET_PRODUCT_LENGTH_FAIL:{
            return state
        }
        case GET_PRODUCT_LIST_FAIL:{
            return state
        }
        default:{
            return state;
        }
    }
}