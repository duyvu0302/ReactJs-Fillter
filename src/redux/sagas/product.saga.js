import {put,takeEvery} from 'redux-saga/effects';
import axios from 'axios';

import {
    GET_PRODUCT_LIST_SUCCESS,
    GET_PRODUCT_LIST_FAIL,
    GET_PRODUCT_LIST
} from '../constants';

const urlData = process.env.REACT_APP_API_URL;
function * getProductList(action){
    try {
        const{page,gb,inch,softPrice, limit,categories,categoriesChild,box,brand,rating,price,searchKey} = action.payload;
        console.log("function*getProductList -> categories", categories)
        const response = yield axios({
          method: "GET",
          url: `${urlData}/products`,
          params:{
            ...(page && {_page:page}),
            ...(limit && {_limit:limit}),
            ...(categories && {typeParentProduct:categories}),
            ...((categories ==1 && gb) && {gb:gb}),
            ...((categories ==2 && inch) && {inch:inch }),
            ...((categories ==3 && categoriesChild) && {typeChildrenProduct:categoriesChild }),
            ...(brand && {brand:brand}),
            ...(box && {box:box}),
            ...(price &&{price_gte: price[0],price_lte:price[1]}),
            ...(softPrice && {_sort:"price",_order:softPrice}),
            ...(rating &&{star:rating}),
            ...(searchKey && {title_like:searchKey.search})
        }
        });
        const data = response.data;
        const dataLengt = data.length
        // if(page) setProductData(data)
        // else setPaginationLength(data.length)
        yield put({
            type: GET_PRODUCT_LIST_SUCCESS,
            payload: data
          });
    }
        catch (error) {
            yield put({
                type: GET_PRODUCT_LIST_FAIL,
                payload: error,
              });
        }
}
export default function *  productsSaga(){
    yield takeEvery (GET_PRODUCT_LIST,getProductList);
}