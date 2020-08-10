import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './component/Navbar';
import { Component } from 'react';
import Product from './component/Product'; 
import Details from './component/Details';
import Cart from './component/Cart';
import Default from './component/Default';
import ProductList from './component/ProductList';    
import {BrowserRouter as Router , Switch , Link, Route} from 'react-router-dom';
import Modal from "./component/Modal";


class App extends Component{
  render(){
    return <React.Fragment>
     <NavBar/>
     <Switch>
       <Route exact path="/" component={ProductList} />
       <Route exact path="/details" component={Details} />
       <Route exact path="/cart" component={Cart} />
       <Route component={Default} />
     </Switch>
     <Modal/>
    </React.Fragment>
  }
}
export default App;
