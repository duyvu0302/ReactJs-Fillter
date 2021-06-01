import React, { useEffect , useState} from "react";
import { Select, Row, Col, Rate,Pagination } from "antd";
import axios from "axios";

import {connect} from 'react-redux';
import {
  setCurrentPage,
  getProductList,
  setCategories,
  setCategoriesChild,
  setPrice,
  setBrand,
  setBox,
  setRating,
  setGb,
  setInch,
  setSortPrice,
  getProductLength
} from '../../redux/actions';

import "./style.css";
const { Option } = Select;

function Main(prop) {
  const {
    setCurrentPage,
    currentPage,
    getProductLength,
    productLength,
    searchKey,
    setSortPrice,
    sortPrice,
    productList,
    getProductList,
    categories,
    box,
    brand,
    rating,
    price,
    gb,
    inch,
    categoriesChild
  } = prop;
  const [limit,setLimit] = useState(10);
  useEffect(() => {
    getProductList({
      page:currentPage,
      limit:limit,
      box,
      sortPrice,
      brand,
      price,
      rating,
      categories,
      searchKey,
      categoriesChild,
      gb,inch
    });
    getProductLength({
      box,
      sortPrice,
      brand,
      price,
      rating,
      categories,
      searchKey,
      categoriesChild,
      gb,inch
    })
  },[limit,currentPage,categories,searchKey,price,brand,box,rating,gb,inch,sortPrice])

  const renderProduct =  () => {
    if(productList.length ==0){
      return (
        <>
            <p className='dataEmpty'>Không có dữ liệu !</p>
        </>
      )
    }
    if(productList){
      return productList.map((item, index) => (
        <>
          <Col key={`${index} - 'renderProduct' - ${item.id}`} className="gutter-row product-item" span={8}>
            <div style={style}>
              <img style={{ width: "unset" }} src={item.src} alt="" />
              <p>{item.title}</p>
              <div className="info">
                <Rate disabled value={item.star} />
                <p>{item.price}</p>
              </div>
            </div>
          </Col>
        </>
      ));
    }
  
    
  };
  function handleChangeSelect(softPrice) {
    setSortPrice(softPrice)
  }
  function onShowSizeChange(current, pageSize) {
      setLimit(pageSize)
  }

  const style = {
    border: "solid 1px #eee",
    padding: "10px",
    height: "100%"
  };
  return (
    <>
      <div className="container-product">
        <div className="container-title">
          <p></p>
          <Select
            defaultValue=""
            style={{ width: 120 }}
            onChange={handleChangeSelect}
          >
            <Option value="">Default</Option>
            <Option value="asc">Price Asc</Option>
            <Option value="desc">Price Desc</Option>
          </Select>
        </div>
        <div className="product-list">
          <Row gutter={[16, 16]}>
            {renderProduct()}
          </Row>
        </div>
        {productLength >0 &&(
        <div style={{paddingTop:"1rem"}} className="pagination">
          <Pagination 
            current={currentPage}
           total={productLength} 
           showSizeChanger
            onShowSizeChange={onShowSizeChange}
            onChange={(page) => setCurrentPage(page)}
             />
        </div>
        )}
      </div>
       
    </>
  );
}
const mapStateToProps = (state)=>{
  const {
    productLength,
    currentPage,
    productList,
    searchKey,
    rating,box,
    brand,categories,
    categoriesChild,
    price,gb,inch,sortPrice} = state.productReducer
  return {
    productList,
    rating,box,brand,
    categories,searchKey,
    categoriesChild,price,
    gb,inch,sortPrice,
    productLength,
    currentPage
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    getProductList : (params)=>dispatch(getProductList(params)),
    setBox : (params)=>dispatch(setBox(params)),
    setCategories : (params)=>dispatch(setCategories(params)),
    setCategoriesChild : (params)=>dispatch(setCategoriesChild(params)),
    setBrand : (params)=>dispatch(setBrand(params)),
    setPrice : (params)=>dispatch(setPrice(params)),
    setRating : (params)=>dispatch(setRating(params)),
    setGb:(params)=>dispatch(setGb(params)),
    setInch:(params)=>dispatch(setInch(params)),
    setSortPrice:(params)=>dispatch(setSortPrice(params)),
    getProductLength:(params)=>dispatch(getProductLength(params)),
    setCurrentPage:(params)=>dispatch(setCurrentPage(params))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main);
