import { useEffect, useState } from 'react';
import './App.css';
import Product from './Product';

const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"

function App() {

  const [products, setProducts] = useState([])

  const getData = async () => {
    const res = await fetch(API_URL)
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    getData()
  })

  return (
    <div className='app'>
      <h1>MAYBELLINE</h1>
      <div className='container'>
      {
        products.map((product) => (
          <Product product = {product}/>
        ))
      }
      </div>
    </div>
  );
}

export default App;
