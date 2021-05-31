import { fork } from 'redux-saga/effects';

import productList from './product.saga';

export default function * mySaga(){
    yield fork(productList)
}