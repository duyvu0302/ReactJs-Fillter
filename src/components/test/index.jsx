import React,{useEffect} from 'react';
import { connect } from 'react-redux';

import { getProductList } from '../../redux/actions';

function test({getProductList,productList}){
console.log("test -> productList", productList)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        getProductList(
            {
                limit:10,
                page:1
            }
        )
    },[])

    return <h1>hello</h1>
}

const mapStateToProps = (state) => {
    const { productList } = state.productList;
    return {
        productList,
    }
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        getProductList: (params) => dispatch(getProductList(params)),
    };
  }
  export default connect(mapStateToProps,mapDispatchToProps)(test);