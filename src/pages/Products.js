import React from 'react';
import './Products.css';
import clothesImage from '../assets/product1.avif';
import GroceriesImage from '../assets/Groceries.avif';
import GadgetsImage from '../assets/Gadgets.jpg';
import BeautyImage from '../assets/Beauty.jpg';
 

const Products = () => {
  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="product-list">
        <div className="product-item">
          <img src={clothesImage} alt="Clothes" className="product-image" />
          <h2>Clothes</h2>
          <p>Explore our range of clothing for men, women, and kids.</p>
        </div>
        
        <div className="product-item">
          <img src={GroceriesImage} alt="Groceries" className="product-image" />
          <h2>Groceries</h2>
          <p>Fresh and quality groceries delivered to your door.</p>
        </div>
        
        <div className="product-item">
          <img src={GadgetsImage} alt="Gadgets" className="product-image" />
          <h2>Gadgets</h2>
          <p>Latest gadgets and electronics for your convenience.</p>
        </div>
        
        <div className="product-item">
          <img src={BeautyImage} alt="Beauty Products" className="product-image" />
          <h2>Beauty Products</h2>
          <p>A variety of beauty products for every need.</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
