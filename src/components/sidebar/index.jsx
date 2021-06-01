import React, { useState, useEffect } from "react";
import { Collapse, Button, Checkbox, Rate, InputNumber, Form } from "antd";
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
  setInch
} from '../../redux/actions';

import "./style.css";
const { Panel } = Collapse;

function Sidebar(prop) {
  const {
    setBrand,
    setCategories,
    setBox,
    setRating,
    setPrice,
    setCategoriesChild,
    setCurrentPage,
    categories,
    box,
    brand,
    rating,
    price,
    setGb,
    setInch,
    currentPage
  } = prop;
  const [isChecked, setIsChecked] = useState(false);
  const [input, setInput] = useState();
  const [input1, setInput1] = useState();
  const [isShowBtn, setIsShowBtn] = useState(false);
  const [containPrice, setContainPrice] = useState();
  const [showCollapse, setIsShowCollapse] = useState(false);
  const [showCollapseRating, setIsShowCollapseRating] = useState(false);
  const [showCollapsePrice, setIsShowCollapsePrice] = useState(false);
  
  useEffect(() => {
    if (
      !categories &&
      (!box || box.length == 0) &&
      (!brand || brand.length == 0) &&
      !rating &&
      (!price || price.length == 0)
    ) {
      setIsShowBtn(false);
    }
  }, [categories, box, brand, rating, price,currentPage]);

  const optionsTypes = [
    { label: "Có ốp", value: 2 },
    { label: "Có hộp", value: 3 },
  ];
  const optionsBrand = [
    { label: "Samsung", value: "samsung" },
    { label: "Sony", value: "sony" },
    { label: "LG", value: "lg" },
    { label: "Dell", value: "dell" },
    { label: "Iphone", value: "iphone" },
  ];
  const categoriesData = [
    {
      id: 1,
      name: "Phone",
      list: [
        { id: 16, name: "16 GB" },
        { id: 32, name: "32 GB" },
        { id: 64, name: "64 GB" },
      ],
    },
    {
      id: 2,
      name: "Tivi",
      list: [
        { id: 19, name: "19 Inch" },
        { id: 32, name: "32 Inch" },
        { id: 64, name: "64 Inch" },
      ],
    },
    {
      id: 3,
      name: "Laptop",
    },
  ];
  const ratingData = [
    { id: 1, value: 5, price: 10.0 },
    { id: 2, value: 4, price: 11.0 },
    { id: 3, value: 3, price: 12.0 },
    { id: 4, value: 2, price: 13.0 },
    { id: 5, value: 1, price: 14.0 },
  ];
  const priceData = [
    { id: 2, price: "$ 100 - 200" },
    { id: 3, price: "$ 200- 500" },
    { id: 4, price: "$ 500 - 1000" },
  ];

 
  const onChangeCategories = (key) => {
    setGb(null);
    setInch(null);
    setCategoriesChild(null);
    setCategories(key);
    setCurrentPage(1);
    if (key) {
      setIsShowBtn(true);
      setIsShowCollapse(true);
    } else {
      setIsShowCollapse(!showCollapse);
    }
  };
  const onChangeCategoriesChild = (key) => {
    if (categories == 1) {
      setGb(key);
    }
    if (categories == 2) {
      setInch(key);
    }
    if (categories == 3) {
      setCategoriesChild(key);
    }
    setCurrentPage(1);
    if (key) {
      setIsShowBtn(true);
    }
  };
  const onChangeType = (key) => {
    setCurrentPage(1);
    setBox(key);
    if (key) {
      setIsShowBtn(true);
    }
    
  };
  const onChangeRating = (key) => {
    setRating(key);
    setCurrentPage(1);
    if (key) {
      setIsShowBtn(true);
      setIsShowCollapseRating(true);
    } else {
      setIsShowCollapseRating(!showCollapse);
    }
  };
  const onChangeBrand = (key) => {
    setCurrentPage(1);
    setBrand(key);
    if (key) {
      setIsShowBtn(true);
    }
  };

  const onChangePrice = (key) => {
    let value;
    setContainPrice(key)
    if (key == 1) {
      value = [0, 50];
      setPrice(value);
      setInput1(value[1]);
      setInput("");
      setIsShowBtn(true);
      setIsShowCollapsePrice(true);

    }
    if (key == 2) {
      value = [100, 200];
      setPrice(value);
      setInput(value[0]);
      setInput1(value[1]);
      setIsShowBtn(true);
      setIsShowCollapsePrice(true);

    }
    if (key == 3) {
      value = [200, 500];
      setPrice(value);
      setInput(value[0]);
      setInput1(value[1]);
      setIsShowBtn(true);
      setIsShowCollapsePrice(true);

    }
    if (key == 4) {
      value = [500, 1000];
      setPrice(value);
      setInput(value[0]);
      setInput1(value[1]);
      setIsShowBtn(true);
      setIsShowCollapsePrice(true);

    }
    if (key == 5) {
      value = [1000, 100000];
      setPrice(value);
      setInput(value[0]);
      setInput1("");
      setIsShowBtn(true);
      setIsShowCollapsePrice(true);
    }
    if (key == 6) {
      if (isChecked === true) {
        setPrice([input, input1]);
        setIsChecked(false);
        setIsShowBtn(true);
      }
      if (isChecked === false) {
        setPrice([]);
        setInput("");
        setInput1("");
      }
    }
    if (key == undefined) {
      setPrice([]);
      setInput("");
      setInput1("");
      setIsShowCollapsePrice(!showCollapse);
    }
    setCurrentPage(1);
  };
  const handleChangeInput = (e) => {
    setInput(e);
    setIsChecked(true);
  };

  const handleChangeInput1 = (e) => {
    setInput1(e);
    setIsChecked(true);
  };
  const handleClearFilter = () => {
    setIsShowCollapse(false);
    setIsShowCollapseRating(false);
    setIsShowCollapsePrice(false);
    setCategories(null);
    setBox([]);
    setBrand([]);
    setRating(null);
    setPrice([]);
    setInput("");
    setInput1("");
  };
  const renderCategories = () => {
    return categoriesData.map((item, index) => (
      <>
        <Panel
          className={item.list ? "" : "categories-content-box-none"}
          header={item.name}
          key={item.id}
        >
          {item.list && (
            <Collapse onChange={onChangeCategoriesChild} accordion>
              {item.list.map((item, index) => {
                return (
                  <>
                    <Panel
                      className="categories-content-box-none"
                      header={` ${item.name}`}
                      key={item.id}
                    ></Panel>
                  </>
                );
              })}
            </Collapse>
          )}
        </Panel>
      </>
    ));
  };
  return (
    <>
      <div className="sidebar">
        {isShowBtn === true && (
          <div className="btn-clear-filter">
            <Button onClick={handleClearFilter}>Clear all filter</Button>
          </div>
        )}
        <div className="categories">
          <div className="categories-title">
            <p>Show the result for </p>
          </div>
          <div className="categories-content">
            <Collapse
              activeKey={[`${showCollapse === true ? categories : ""}`]}
              destroyInactivePanel
              onChange={onChangeCategories}
              accordion
            >
              {renderCategories()}
            </Collapse>
          </div>
        </div>
        <div className="facet">
          <div className="facet-title">Refine by</div>
          <div className="types">
            <Checkbox.Group
              value={box}
              options={optionsTypes}
              onChange={onChangeType}
            >
            </Checkbox.Group>
          </div>
          <div className="facet-title">Brand</div>
          <div className="brand types">
            <Checkbox.Group
             value={brand}
              options={optionsBrand}
               onChange={onChangeBrand} />
          </div>
          <div className="facet-title">Ratings</div>
          <div className="ratings types">
            <Collapse 
              activeKey={[`${showCollapseRating === true ? rating : ""}`]}
              onChange={onChangeRating} accordion>
              {ratingData.map((item, index) => {
                return (
                  <>
                    <Panel
                      className="categories-content-box-none"
                      header={
                        <>
                          <Rate disabled value={item.value} />
                        </>
                      }
                      key={item.value}
                    ></Panel>
                  </>
                );
              })}
            </Collapse>
          </div>
          <div className="facet-title">Prices</div>
          <div className="Prices ratings">
            <Collapse 
              activeKey={[`${showCollapsePrice === true ? containPrice : ""}`]}

              onChange={onChangePrice} accordion>
              <Panel
                className="categories-content-box-none"
                header="<=100.00"
                key={1}
              ></Panel>
              {priceData.map((item, index) => {
                return (
                  <>
                    <Panel
                      className="categories-content-box-none"
                      header={item.price}
                      key={item.id}
                    ></Panel>
                  </>
                );
              })}
              <Panel
                header=">1000.00"
                className="categories-content-box-none"
                key={5}
              ></Panel>
              <div className="prices-input">
                <InputNumber onChange={handleChangeInput} value={input} /> to $
                <InputNumber onChange={handleChangeInput1} value={input1} />
              </div>
              <Panel
                header={<Button>Go</Button>}
                className="categories-content-box-none btn-go"
                key={6}
              ></Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state)=>{
  const {productList,rating,box,brand,categories,categoriesChild,price,gb,inch} = state.productReducer
  return {
    productList,
    rating,box,brand,categories,categoriesChild,price,gb,inch
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
    setCurrentPage:(params)=>dispatch(setCurrentPage(params))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);
