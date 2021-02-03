import React from "react";
import { ProductList } from '../components/ProductList/ProductList';
import { ContainerMaxWidth } from '../components/ContainerMaxWidth/ContainerMaxWidth';


export const HomePage = () => {
    return (
        <div>
            <ContainerMaxWidth />
            <div className="container">
                <ProductList />
            </div>
        </div>
    );
}