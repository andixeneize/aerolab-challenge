import './App.css';
import { useSelector } from "react-redux";
import React from "react";
import { NavBar } from './components/navBar';
import { ProductList } from './components/productList';
import { Category } from './components/category';
import { ToastContainer } from 'material-react-toastify';
import { Pagination } from './components/pagination';
import { SortBy } from './components/sortBy';


function App() {
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);

  return (
    <div className="App">
      <NavBar name={user.name} coins={user.points} />
      <Category />
      <div className="container">
        <SortBy total={products.length} />
        <ProductList products={products} coins={user.points} />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
