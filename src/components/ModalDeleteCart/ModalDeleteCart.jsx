import React from 'react';
import PropTypes from 'prop-types';
import { ModalBase } from '../ModalBase/ModalBase';

export const ModalDeleteCart = ({ onClose, onConfirm }) => {
    return (
        <ModalBase
            header="Deleting from the basket!"
            text="This product will be deleted with your cart."
            textConfirm="Are you sure want to remove a product from your shopping card?"
            closeButton={true}
            bgColorHeader="#ff521d"
            bgColorBody="#f77437"
            bgColorFooter="#f77437"
            bgInfo="#e04102"
            onClose={onClose}
            onConfirm={onConfirm}
        />
    )
}

ModalDeleteCart.propTypes = {
    onClose: PropTypes.func,
    onConfirm: PropTypes.func
}
