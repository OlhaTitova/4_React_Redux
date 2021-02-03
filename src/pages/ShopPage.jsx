import React from "react";
import { ProductList } from "../components/ProductList/ProductList";


export const ShopPage = () => {

    return (
        <div>
            <div className="container">
                <h1 className="heading-page">Shop</h1>
                <ProductList />
            </div>
        </div>
    )
}
