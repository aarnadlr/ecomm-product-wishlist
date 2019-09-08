import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavbar';
import ProductList from './components/ProductList';
import ItemModal from './components/ItemModal';
import {Container} from 'reactstrap'
function App() {
  return (
    <div className="App">
      <AppNavBar />
      <Container
        // style={{background:'silver'}}
      >
        <ItemModal />
        <ProductList />
      </Container>
    </div>
  );
}

export default App;
