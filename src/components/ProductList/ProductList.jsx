import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Product } from "../Product/Product";
import { ModalAddCart } from "../ModalAddCart/ModalAddCart";
import './ProductList.scss';
import { getFavoriteList, closeModalAdd, modalConfirmAddToCart } from "../../store";
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
  products: state.products,
  modalProductId: state.modalProductId
})

export const ProductList = connect(mapStateToProps, { getFavoriteList, closeModalAdd, modalConfirmAddToCart })(({ products, modalProductId, getFavoriteList, closeModalAdd, modalConfirmAddToCart }) => {

  useEffect(() => getFavoriteList(), []);


  return (
    <div className="ProductList">
      {
        products.map((product) => {
          return <Product
            key={product.id}
            product={product}
          />;
        }
        )}

      {modalProductId &&
        <ModalAddCart
          onConfirm={() => modalConfirmAddToCart(modalProductId)}
          onClose={closeModalAdd}
        />
      }
    </div>
  );
})

ProductList.propTypes = {
  products: PropTypes.object,
  modalProductId: PropTypes.object,
  getFavoriteList: PropTypes.func,
  closeModalAdd: PropTypes.func,
  modalConfirmAddToCart: PropTypes.func
}