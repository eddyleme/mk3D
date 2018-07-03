import React, { Component } from 'react';
import LineItem from './lineitem.js'


export default class Cart extends Component {


	render() {
		return (
			<ul className='cart' >
			{this.props.cart.map((lineItem, index) => {
			    return (<LineItem lineItem={lineItem} key={lineItem.id} />)
				})}
			</ul>
		)
	}

}