import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { addToCart, getProductWithCart, removeProductCart } from '../utils/cart';
import { getProductFavorite } from '../utils/favorite';

// ACTIONS

const GET_PRODUCTS = "GET_PRODUCTS";
const SHOW_MODAL_ADD_TO_CART = 'SHOW_MODAL_ADD_TO_CART';
const CLOSE_MODAL_ADD = 'CLOSE_MODAL_ADD';
const FAVORITE_PRODUCTS = 'FAVORITE_PRODUCTS';
const SHOW_MODAL_DELETE = 'SHOW_MODAL_DELETE';
const CLOSE_MODAL_DELETE = 'CLOSE_MODAL_DELETE';
const CART_PRODUCTS = 'CART_PRODUCTS';


// REDUCER

const initialState = {
    products: [],
    modalProductId: null,
    modalDeleteId: null,
    favoriteProducts: [],
    cartProducts: {},
    productsCounts: {}
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case SHOW_MODAL_ADD_TO_CART:
            return {
                ...state,
                modalProductId: action.payload
            }
        case CLOSE_MODAL_ADD:
            return {
                ...state,
                modalProductId: null
            }
        case SHOW_MODAL_DELETE:
            return {
                ...state,
                modalDeleteId: action.payload
            }
        case CLOSE_MODAL_DELETE:
            return {
                ...state,
                modalDeleteId: null
            }
        case FAVORITE_PRODUCTS:
            return {
                ...state,
                favoriteProducts: state.products.filter(product => action.payload.find(item => item === product.id))
            }
        case CART_PRODUCTS:
            console.log(cartProducts)
            return {
                ...state,
                cartProducts: state.products.filter(product => action.payload[product.id]),
                productsCounts: action.payload
            }
        default:
            return state
    }
}

export const getProducts = (payload) => ({
    type: GET_PRODUCTS,
    payload
});

export const showModalAddToCart = (payload) => ({
    type: SHOW_MODAL_ADD_TO_CART,
    payload
});

export const closeModalAdd = () => ({
    type: CLOSE_MODAL_ADD
});

export const showModalDelete = (payload) => ({
    type: SHOW_MODAL_DELETE,
    payload
});

export const closeModalDelete = () => ({
    type: CLOSE_MODAL_DELETE
});

export const favoriteProducts = (payload) => ({
    type: FAVORITE_PRODUCTS,
    payload
});
export const cartProducts = (payload) => ({
    type: CART_PRODUCTS,
    payload
});

// MIDDLEWARE

export const getProductList = () => async (dispatch) => {
    await getServerData(dispatch)
}

export const modalConfirmAddToCart = (productId) => (dispatch) => {
    addToCart(productId)
    dispatch(closeModalAdd())
}

export const modalConfirmDelete = (productId) => (dispatch) => {
    removeProductCart(productId)
    dispatch(closeModalDelete())
}

export const getFavoriteList = () => async (dispatch) => {
    await getServerData(dispatch)

    const favoriteList = getProductFavorite();
    dispatch(favoriteProducts(favoriteList))
}

export const toggleFavorite = (itemId) => (dispatch) => {
    const favorite = JSON.parse(localStorage.getItem('favoriteList')) || [];
    if (favorite.indexOf(itemId) > -1) {
        favorite.splice(favorite.indexOf(itemId), 1);
    } else {
        favorite.push(itemId);
    }
    localStorage.setItem('favoriteList', JSON.stringify(favorite))
    dispatch(favoriteProducts(favorite))
}

export const getCartList = () => async (dispatch) => {
    await getServerData(dispatch);
    const cartListItems = getProductWithCart();
    dispatch(cartProducts(cartListItems))
}

async function getServerData(dispatch) {
    const res = await fetch('cardProduct.json');
    const data = await res.json();
    dispatch(getProducts(data));
}


const store = createStore(reducer, applyMiddleware(thunk));

export default store;