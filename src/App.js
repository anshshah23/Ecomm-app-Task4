import React, {Component} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
import Appheader from './Appheader';
import Customer from './Customer';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from './components/Modal';


export default class App extends Component {
  render(){
  return (
    
    <React.Fragment>
      <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <Appheader></Appheader>
      <Navbar/>
      <Modal />

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path="/" component={ProductList} />
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>
      </Routes>

      
    </div>

    </React.Fragment>
  )
  }
}