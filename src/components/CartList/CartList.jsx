import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CartItem } from '../CartItem/CartItem';
import { closeModalDelete, getCartList, modalConfirmDelete } from '../../store';
import { ModalDeleteCart } from '../ModalDeleteCart/ModalDeleteCart';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    cartProducts: state.cartProducts,
    modalDeleteId: state.modalDeleteId,
    productsCounts: state.productsCounts
})

export const CartList = connect(mapStateToProps, { getCartList, closeModalDelete, modalConfirmDelete })(({ cartProducts, productsCounts, getCartList, modalDeleteId, closeModalDelete, modalConfirmDelete }) => {

    useEffect(() => { getCartList() }, [])

    return (
        <div>

            { Object.keys(cartProducts).length > 0 ?
                cartProducts.map(product => {
                    return (
                        <CartItem
                            key={product.id}
                            product={product}
                            count={productsCounts[product.id]}
                        />
                    )
                })

                : <div
                    className="row align-items-center justify-content-center"
                >
                    <p
                        className="notification">
                        Your Shopping Cart is Empty
                    </p>
                </div>
            }

            {modalDeleteId &&
                <ModalDeleteCart
                    onClose={closeModalDelete}
                    onConfirm={() => modalConfirmDelete(modalDeleteId)}
                />
            }
        </div>
    )
})

CartList.propTypes = {
    cartProducts: PropTypes.object,
    productsCounts: PropTypes.object,
    modalDeleteId: PropTypes.object,
    getCartList: PropTypes.func,
    closeModalDelete: PropTypes.func,
    modalConfirmDelete: PropTypes.func
}
