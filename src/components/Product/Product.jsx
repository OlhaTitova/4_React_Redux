import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Product.scss';
import { Button } from '../Button/Button';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { EMPTY_HEART, FULL_HEART } from '../../utils/ico';
import { connect } from "react-redux";
import { showModalAddToCart } from '../../store/modalAdd';
import { selectFavorite, toggleFavorite } from '../../store/favorite';


const mapStateToProps = (state) => ({
  favoriteProducts: selectFavorite(state)
});

export const Product = connect(mapStateToProps, { showModalAddToCart, toggleFavorite })(({ product, showModalAddToCart, favoriteProducts, toggleFavorite }) => {

  const colorSvg = favoriteProducts[product.id] ? FULL_HEART : EMPTY_HEART

  return (
    <div
      className="Product"
    >
      <div
        className="row justify-cont-between"
      >
        <img
          className="Product__Img"
          src={product.url}
          alt={product.name}
        />

        <FavoriteButton
          onClick={() => toggleFavorite(product)}
          d={colorSvg}
        />

      </div>
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

      <div className="row justify-content-between align-items-center mt-15">
        <span className="Product__Price">
          {product.price}
          <span className="Product__Сurrency">
            грн
            </span>
        </span>

        <Button
          onClick={() => showModalAddToCart(product)}
          className="btn"
          text="Add to cart"
          style={{ backgroundColor: "#0061c2" }}
        />
      </div>
    </div>
  )
})

Product.propTypes = {
  product: PropTypes.object,
  showModalAddToCart: PropTypes.func,
  favoriteProducts: PropTypes.func,
  toggleFavorite: PropTypes.func
}