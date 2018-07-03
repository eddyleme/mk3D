import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import List from './components/list.js';
import Cart from './components/cart.js';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class App extends Component {
  

  constructor() {
    super();
    this.state = {
      products: [],
      cart: []
    };
    
    this.addItemToCart = this.addItemToCart.bind(this);
  }


  populateList() {
    axios.get('https://hackathon-api.now.sh/products')
    .then(response => {
      this.setState({products: response.data})
    })
    .catch(error => console.log(error))
  }


  addItemToCart(newItem) {
    this.setState({cart: this.state.cart.concat(newItem)})
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header title="Welcome to mk3D" cart={this.state.cart} />
            <Route exact path="/" render={()=><List products={this.state.products} addItemToCart={this.addItemToCart} populateList={this.populateList.bind(this)} />} />
            <Route path="/cart" render={()=><Cart cart={this.state.cart}/>} />
          </div>
        </Router>
      </div>
    );
  }
}