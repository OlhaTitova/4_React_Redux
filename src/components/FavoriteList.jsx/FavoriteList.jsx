import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalAddCart } from '../ModalAddCart/ModalAddCart';
import { Product } from '../Product/Product';
import '../ProductList/ProductList.scss';
import { connect } from "react-redux";
import { getFavoriteList, closeModalAdd, modalConfirmAddToCart } from '../../store';


const mapStateToProps = (state) => ({
    favorites: state.favoriteProducts,
    modalProductId: state.modalProductId
})

export const FavoriteList = connect(mapStateToProps, { getFavoriteList, closeModalAdd, modalConfirmAddToCart })(({ favorites, modalProductId, getFavoriteList, closeModalAdd, modalConfirmAddToCart }) => {

    useEffect(() => getFavoriteList(), [])

    return (
        <div className="ProductList">

            {favorites.length > 0 ?

                favorites.map(product =>
                    <Product
                        key={product.id}
                        product={product}
                    />
                )

                : <div
                    className="row align-items-center justify-content-center"
                >
                    <p
                        className="notification">
                        Favorite products not selected
                    </p>
                </div>
            }

            {modalProductId &&
                <ModalAddCart
                    onConfirm={() => modalConfirmAddToCart(modalProductId)}
                    onClose={closeModalAdd}
                />
            }
        </div>
    );
})

FavoriteList.propTypes = {
    favorites: PropTypes.object,
    modalProductId: PropTypes.object,
    getFavoriteList: PropTypes.func,
    closeModalAdd: PropTypes.func,
    modalConfirmAddToCart: PropTypes.func
}
