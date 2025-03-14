import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../components/Products/Products';
import Loading from '../../components/Loaders/Loading';


const ProductCategories = () => {
  const {name}= useParams()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/$'{categoryName}`
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, [name]);

  if(products.length === 0) return <div><Loading/></div>
  return (
    <div>
    <Products products={products}/>
    </div>
  )
}


export default ProductCategories


