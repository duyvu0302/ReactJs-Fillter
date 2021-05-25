import React, { useEffect , useState} from "react";
import { Select, Row, Col, Rate,Pagination } from "antd";
import axios from "axios";

import "./style.css";
const { Option } = Select;

function Main({
  currentPage,
  setCurrentPage,
  categories,
  categoriesChild,
  trend,
  box,
  brand,
  rating,
  price,
  gb,
  inch,
  searchKey}) {
  const urlData = process.env.REACT_APP_API_URL;
  const [productData, setProductData] = useState([])
  const [softPrice, setSoftPrice] = useState();
  const [paginationLength,setPaginationLength] = useState(0);
  const [limit,setLimit] = useState();
  useEffect(() => {
    getProductList({page: currentPage,
       limit,
       searchKey,
       categories,
       gb,inch,
       categoriesChild,
       trend,
       box,
       brand,
       rating,
       price,
       softPrice});

    getProductList({
    categories,
    gb,inch,
    searchKey,
    categoriesChild,
    trend,
    brand,
    box,
    rating,
    price,
    softPrice});
  },
  [
    limit,
    currentPage,
    gb,inch,
    categories,
    categoriesChild,
    searchKey,
    trend,
    brand,
    box,
    rating,
    price,
    softPrice
    ])
  const getProductList = async (payload) => {
    try {
      const{page,gb,inch, limit,categories,categoriesChild,box,brand,rating,price,searchKey} = payload;
      const response = await axios({
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
      if(page) setProductData(data)
      else setPaginationLength(data.length)
    } catch (error) {
      return error;
    }
  };
  const renderProduct =  () => {
    if(productData.length ==0){
      return (
        <>
            <p className='dataEmpty'>Không có dữ liệu !</p>
        </>
      )
    }
    if(productData){
      return productData.map((item, index) => (
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
    setSoftPrice(softPrice)
  }
  function onShowSizeChange(current, pageSize) {
      console.log("onShowSizeChange -> pageSize", pageSize)
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
        {paginationLength >0 &&(
          <div style={{paddingTop:"1rem"}} className="pagination">
          <Pagination 
          current={currentPage}
           total={paginationLength} 
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

export default Main;
