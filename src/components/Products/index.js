import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../common/components/Loading";
import { setProducts, showLoading } from "../../redux/shop/shopActions";
import Filter from "./Filter";
import "./index.scss";
import Product from "./Product";

function Products() {
	const products = useSelector((state) => state.shop.products);
	const totalRows = useSelector((state) => state.shop.totalRows);
	const loading = useSelector((state) => state.shop.loading);

	const dispatch = useDispatch();

	const [params, setParams] = useState({
		_page: 1,
		_limit: 12,
		categoryId: "",
		price_gte: "",
		price_lte: "",
		brands: "",
		_sort: "",
		_order: "",
	});

	const onLoadMore = () => {
		setParams({
			...params,
			_page: 1,
			_limit: params._limit + 8,
		});
	};

	useEffect(() => {
		dispatch(showLoading(true));
		dispatch(setProducts(params));
	}, [dispatch, params]);

	const showProducts = (products) => {
		let result = null;

		if (products.length > 0) {
			result = products.map((product, index) => {
				return <Product key={product.id} product={product} />;
			});
		}

		return result;
	};

	return (
		<div className="products grid wide">
			<Filter params={params} setParams={setParams} />
			{loading ? (
				<div className="products__loading">
					<Loading />
				</div>
			) : (
				<div className="products__list row">{showProducts(products)}</div>
			)}

			{params._limit >= totalRows && loading === false ? (
				<div className="products__end">
					<span>Out of Products</span>
				</div>
			) : (
				<div className="products__more">
					<div onClick={onLoadMore}>
						<span>Load More</span>
						<i className="fas fa-arrow-down"></i>
					</div>
				</div>
			)}
		</div>
	);
}

export default Products;
