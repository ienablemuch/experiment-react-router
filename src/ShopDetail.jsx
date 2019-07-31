import React, { useState, useEffect } from "react";
import "./App.css";

function ShopDetail({ match }) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const dataReq = await fetch(
                `https://reqres.in/api/products/${match.params.id}`
            );

            const { data: product } = await dataReq.json();

            setProduct(product);
        };

        fetchProduct();
    }, [match.params.id]);

    return (
        <div>
            <h1>Item</h1>

            <pre>{JSON.stringify(match, null, 4)}</pre>

            <div>
                <table className="content">
                    <tr>
                        <td>Name</td>
                        <td>{product.name}</td>
                    </tr>
                    <tr>
                        <td>Year</td>
                        <td>{product.year}</td>
                    </tr>
                    <tr>
                        <td>Color</td>
                        <td>{product.color}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default ShopDetail;
