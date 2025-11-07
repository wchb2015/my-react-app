import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

function ProductCategoryRow({ category }: { category: string }) {
  return (
    <tr>
      <th colSpan={2}>
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }: { product: Product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }: { products: Product[] }) {
  const rows: React.ReactElement[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }: { products: Product[] }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS: Product[] = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function HomePage() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1>Welcome to App2 - Product Inventory</h1>
      <p style={{ fontSize: '18px', marginBottom: '30px' }}>
        This is a product inventory management application with searchable product tables.
      </p>
      <div style={{ 
        backgroundColor: '#f0f0f0', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h3>Features:</h3>
        <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
          <li>Browse product inventory</li>
          <li>Filter products by availability</li>
          <li>Search products by name</li>
          <li>Organized by categories</li>
        </ul>
      </div>
      <Link 
        to="/app2/products" 
        style={{ 
          display: 'inline-block',
          padding: '10px 30px',
          backgroundColor: '#4CAF50',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          marginTop: '20px'
        }}
      >
        View Products
      </Link>
    </div>
  );
}

export default function App2() {
  return (
    <div>
      <nav style={{ 
        padding: '10px 20px', 
        backgroundColor: '#f8f8f8', 
        borderBottom: '1px solid #ddd',
        marginBottom: '20px'
      }}>
        <Link 
          to="/app2" 
          style={{ 
            marginRight: '20px', 
            textDecoration: 'none',
            color: '#333',
            fontWeight: 'bold'
          }}
        >
          Home
        </Link>
        <Link 
          to="/app2/products" 
          style={{ 
            textDecoration: 'none',
            color: '#333',
            fontWeight: 'bold'
          }}
        >
          Products
        </Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<FilterableProductTable products={PRODUCTS} />} />
      </Routes>
    </div>
  );
}
