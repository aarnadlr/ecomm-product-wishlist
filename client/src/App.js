import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavbar';
import ProductList from './components/ProductList';
import ItemModal from './components/ItemModal';
import {Container, Spinner} from 'reactstrap'
import {useSelector} from "react-redux";
function App() {
  const isLoading = useSelector(state=>state.item.isLoading);

  return (
    <div className="App">
      <AppNavBar />
      <Container
        // style={{background:'silver'}}
      >
        { isLoading &&

          <div style={{position:'absolute', left:'50%', display:'flex'}}>
            <Spinner color="primary"/>
            <p>Loading</p>
          </div>

        }
        <ItemModal />
        <ProductList />
      </Container>
    </div>
  );
}

export default App;
