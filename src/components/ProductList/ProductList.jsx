import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Product } from "../Product/Product";
import { ModalAddCart } from "../ModalAddCart/ModalAddCart";
import './ProductList.scss';
import { closeModalAdd, modalConfirmAddToCart, selectModalAdd } from "../../store/modalAdd";
import { connect } from "react-redux";
import { getProductList, selectProducts } from "../../store/products";


const mapStateToProps = (state) => ({
  products: selectProducts(state),
  modalProductId: selectModalAdd(state),
})

export const ProductList = connect(mapStateToProps, { getProductList, closeModalAdd, modalConfirmAddToCart })(({ products, modalProductId, getProductList, closeModalAdd, modalConfirmAddToCart }) => {

  useEffect(() => getProductList(), []);


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
  getProductList: PropTypes.func,
  closeModalAdd: PropTypes.func,
  modalConfirmAddToCart: PropTypes.func
}