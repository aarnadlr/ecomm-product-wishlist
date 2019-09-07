import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavBar from "./components/AppNavbar";
import ProductList from "./components/ProductList";
function App() {
  return (
    <div className="App">
      <AppNavBar/>
      <ProductList/>
    </div>
  );
}

export default App;
