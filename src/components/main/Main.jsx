import React, { useEffect, useState } from 'react';
import './Main.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = () => {
  const [albon, setAlbon] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setAlbon(res.data.products); // albon to'g'ridan-to'g'ri products massivini olish
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredProducts = albon.filter(
    (product) => 
      product.title.toLowerCase().includes(query.toLowerCase())
  );

  const cart = filteredProducts.map((el) => (
    <Link to={`/product/${el.id}`} className='cart_cart' key={el.id}>
      {el.images && el.images[0] ? (
        <img className='cartimg' src={el.images[0]} alt="not found" />
      ) : (
        <img className='cartimg' src='default-image-path' alt="not found" />
      )}
      <div className='textt'>
        <span className='title'>{el.title.slice(0, 100)}</span><br />
        <h4>{el.price}</h4><br />
        <span className='hours'>🌟 about 14 hours</span> <br />
      </div>
      <button className='add'>
        Add to cart
      </button>
    </Link>
  ));

  return (
    <>
      <div className="container">
        <div>
          <form className="formField" action="">
            <input type="text" placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} />
          </form>
        </div>
        <div className='cart1'>
          {cart}
        </div>
        <div className="card"></div>
      </div>
    </>
  );
};

export default Main;
