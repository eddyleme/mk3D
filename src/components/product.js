import React, { Component } from 'react';

export default class Product extends Component {
	handleClick(event) {
		event.preventDefault();
		this.props.addItemToCart(this.props.product)
	}

	render() {
		return (
			<div className="product" id={this.props.product.id} >
				<h2>{this.props.product.name}</h2>
				<div>
					<img className="product-photo" alt={this.props.product.name} src={this.props.product.thumbnail["2x"]} />
					<p className="description">{this.props.product.description}</p>
				</div>
				<p>{this.props.product.inventory} in stock</p>
				<p>{this.props.product.price}</p>
				<button onClick={(e) => this.handleClick(e)} >add to cart</button>
			</div>
		)
	}

}