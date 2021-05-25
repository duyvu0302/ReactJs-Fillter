import React, { useState, useRef } from "react";
import { Input, Space,Row } from 'antd';

import './style.css';
import Form from "antd/lib/form/Form";
const { Search } = Input;



function header(prop) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const typingTimeoutRef = useRef(null)
  const {setSearchKey,onSubmit} = prop;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [search,setSearch] = useState('');
  const onSearch = value => console.log(value);
  
  const handleChange=(e)=>{
    const value = e.target.value
    setSearch(value)

    if(typingTimeoutRef.current){
      clearTimeout(typingTimeoutRef.current)
    }
    typingTimeoutRef.current= setTimeout(()=>{
      const formValue = {
        search: value,
      };
      setSearchKey(formValue)
    },1000)
  }

  return (
    <>
      <div className="header">
          <Row justify="start">
            <div className='header-logo'>
              <img src="https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/logo-is.png" alt=""/>
            </div>
            <div className='header-text'>
                <a href="/">amazing</a>
            </div>
            <div className='header-input'>
            <Space direction="vertical">
              <Search placeholder="search a product" value={search} onChange={handleChange} enterButton />
            </Space>,
            </div>
          </Row>
      </div>      
    </>
  );
}

export default header;
