import React, { Component } from 'react';

export default class Cart extends Component {


	render() {
		return (
			<div>
				<h2>{this.props.lineItem.name}</h2>
				<img alt={this.props.lineItem.name} src={this.props.lineItem.thumbnail["1x"]} />
				<p>{this.props.lineItem.price}</p>
			</div>
		)
	}

}