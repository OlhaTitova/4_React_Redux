import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalAddCart } from '../ModalAddCart/ModalAddCart';
import { Product } from '../Product/Product';
import '../ProductList/ProductList.scss';
import { connect } from "react-redux";
import { closeModalAdd, modalConfirmAddToCart, selectModalAdd } from '../../store/modalAdd';
import { getFavoriteList, selectFavorite } from '../../store/favorite';

const mapStateToProps = (state) => ({
    favorites: selectFavorite(state),
    modalProductId: selectModalAdd(state),
})

export const FavoriteList = connect(mapStateToProps, { getFavoriteList, closeModalAdd, modalConfirmAddToCart })(({ favorites, modalProductId, getFavoriteList, closeModalAdd, modalConfirmAddToCart }) => {

    useEffect(() => getFavoriteList(), [getFavoriteList])

    return (
        <div className="ProductList">
            {Object.keys(favorites).length > 0 ?

                Object.values(favorites).map(product =>
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
