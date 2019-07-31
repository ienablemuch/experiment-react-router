import React, { useState, useEffect } from "react";
import "./App.css";

import { Link } from "react-router-dom";

function Shop() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const dataReq = await fetch("https://reqres.in/api/products", {});

        const { data: products } = await dataReq.json();

        setProducts(products);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Shop Page</h1>

            {products.map(product => (
                <h1 key={product.id}>
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </h1>
            ))}
        </div>
    );
}

export default Shop;
