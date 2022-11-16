import React,{useState} from 'react';
import Product from './Product.js';
import ProductCard from './ProductCard.js';

const ProductView=()=>{
const [productData,setProductData]=useState(Product);

return (
    <>
    <ProductCard data={productData}/>
    </>
);
}
export default ProductView;