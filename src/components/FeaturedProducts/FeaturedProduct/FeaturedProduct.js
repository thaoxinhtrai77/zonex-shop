import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, loadCurrentProduct } from "../../../redux/shop/shopActions";
import "./FeaturedProduct.scss";

FeaturedProduct.propTypes = {
	product: PropTypes.object,
};

function FeaturedProduct({ product }) {
	const dispatch = useDispatch();
	return (
		<div className="product col l-2-4 m-4 c-6">
			<Link
				to={`/products/${product.id}`}
				className="product__img"
				style={{ backgroundImage: `url(${product.image})` }}
				onClick={() => dispatch(loadCurrentProduct(product))}
			></Link>
			<div className="product__content">
				<Link to={`/products/${product.id}`}>{product.name}</Link>
				<div>
					<span>${product.price}</span>
					<i
						className="fas fa-cart-arrow-down"
						onClick={() => dispatch(addToCart(product.id, 1))}
					></i>
				</div>
			</div>
			<div className="product__action">
				<button onClick={() => dispatch(addToCart(product.id, 1))}>
					ADD TO CART
				</button>
				<ul>
					<li>
						<i className="fas fa-search"></i>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default FeaturedProduct;