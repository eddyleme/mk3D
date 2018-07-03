import React, { Component } from 'react';
import Product from './product.js'
import axios from 'axios';

export default class List extends Component {


  componentDidMount() {
    this.props.populateList();
  }
	

	render() {
		return (
			<div className="list">
				{this.props.products.map((product, index) => {
					if(product.inventory>0 && product.name!=='Notebook' ) {
			    return (<Product product={product} key={product.id} addItemToCart={this.props.addItemToCart} logToConsole={this.props.logToConsole}/>)
					}
				})}
			</div>
		)
	}

}