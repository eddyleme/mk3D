import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component {

	render() {
		let cartImage;

		if(this.props.cart.length===0) {
			cartImage = null;
		} else {
			cartImage = (<Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.441 7h-2.882l4.701-4.702c.198-.198.459-.298.72-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26zm9.118 0h2.883l-4.702-4.702c-.198-.198-.459-.298-.72-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm-16.559 2v2h.643c.577 0 1.061.299 1.343 1h20.03c.28-.699.766-1 1.343-1h.641v-2h-24zm21.213 5h-18.425l1.204 3h16.016l1.205-3zm-16.417 5l1.204 3h12l1.205-3h-14.409z"/></svg></Link>);
		}

		return (
			<header className="App-header">
				<Link to="/" style={{textDecoration: 'none'}}><h1 className="App-title">{this.props.title}</h1></Link>
				<h4 className="subtext">Where we print cool things in 3D</h4>
				{cartImage}
			</header>
		)
	}
}