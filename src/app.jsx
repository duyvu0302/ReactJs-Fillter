import React,{useState, useRef} from "react";
import Sidebar from './components/sidebar';
import Main from './components/main';
import Header from './components/header';




function App() {
  const [searchKey,setSearchKey] = useState('');
  const [categories,setCategories] = useState();
  const [categoriesChild,setCategoriesChild] = useState();
  const [box,setBox] = useState([]);
  const [brand,setBrand] = useState();
  const [rating,setRating] = useState();
  const [gb,setGb] = useState();
  const [inch,setInch] = useState();
  const [price,setPrice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  

  return (
    <>
      <Header
        setSearchKey = {setSearchKey}
      />
      <main>
        <Sidebar
            setCategories={setCategories}
            setCategoriesChild={setCategoriesChild}
            setBox = {setBox}
            setBrand={setBrand}
            setRating ={setRating}
            setPrice = {setPrice}
            setCurrentPage={setCurrentPage}
            categories={categories}
            categoriesChild={categoriesChild}
            brand={brand}
            rating={rating}
            price={price}
            box={box}
            setGb={setGb}
            setInch={setInch}
        />
        <Main
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            categories={categories}
            categoriesChild={categoriesChild}
            brand={brand}
            rating={rating}
            price={price}
            box={box}
            searchKey = {searchKey}
            gb={gb}
            inch={inch}
         />
      </main>
    </>
  );
}

export default App;
