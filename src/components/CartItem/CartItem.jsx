import React from "react";
import PropTypes from 'prop-types';
import { Button } from "../Button/Button";
import '../Product/Product.scss';
import './CartItem.scss';
import { connect } from "react-redux";
import { showModalDelete } from "../../store/cart";


export const CartItem = connect(null, { showModalDelete })(({ product, count, showModalDelete }) => {

    return (
        <div>
            <hr />
            <div className="width-1280 row justify-content-between">
                <img
                    className="cart-img"
                    src={product.url}
                    alt={product.name}
                />
                <div className="row  column justify-content-center m-15 width-200">
                    <p
                        className="Product__Name">
                        {product.name}
                    </p>
                    <p
                        className="Product__id">
                        Код: {product.id}
                    </p>

                    <p>
                        <span className="Product__Color">
                            Цвет:
                        </span>
                        {product.color}
                    </p>
                </div>
                <div className="row align-items-center m-15">
                    <span className="Product__Price">
                        {product.price}
                        <span className="Product__Сurrency">
                            грн
                        </span>
                    </span>
                </div>
                <div className="row align-items-center m-15">
                    {count}
                </div>

                <div className="row align-items-center m-15">
                    <Button
                        className="btn"
                        text="Remove"
                        style={{ backgroundColor: "#f8560b" }}
                        onClick={() => showModalDelete(product.id)}
                    >&times;
            </Button>
                </div>
            </div>
        </ div >
    )
})

CartItem.propTypes = {
    product: PropTypes.object,
    count: PropTypes.number,
    showModalDelete: PropTypes.func,
}