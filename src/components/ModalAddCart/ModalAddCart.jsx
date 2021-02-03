import React from 'react';
import PropTypes from 'prop-types';
import { ModalBase } from '../ModalBase/ModalBase';
// import "../common/common.scss";

export const ModalAddCart = ({ onClose, onConfirm }) => {

  return (
    <ModalBase
      header="Addition to cart!"
      text="This product will be added to your cart."
      textConfirm="Are you sure want to add a product to your shopping card?"
      closeButton={true}
      bgColorHeader="#0061c2"
      bgColorBody="#047ef8"
      bgColorFooter="#047ef8"
      bgInfo="#0061c2"
      onClose={onClose}
      onConfirm={onConfirm}
    />
  )
}

ModalAddCart.propTypes = {
  onClose: PropTypes.func,
  onConfirm: PropTypes.func
}