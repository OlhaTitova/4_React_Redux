import { getProductWithCart, removeProductCart } from "../utils/cart";


const GET_CART_PRODUCTS = 'GET_CART_PRODUCTS';
const REMOVE_PRODUCT_WITH_CART = 'REMOVE_PRODUCT_WITH_CART';
const SHOW_MODAL_DELETE = 'SHOW_MODAL_DELETE';
const CLOSE_MODAL_DELETE = 'CLOSE_MODAL_DELETE';

export const MODULE_NAME = 'cart';
export const selectCart = state => state[MODULE_NAME].cartProducts;
export const selectModalDel = state => state[MODULE_NAME].modalDeleteId;


const initialState = {

    cartProducts: {},
    modalDeleteId: null,
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CART_PRODUCTS:
            return {
                ...state,
                cartProducts: action.payload,
            }
        case REMOVE_PRODUCT_WITH_CART:
            return {
                ...state,
                cartProducts: action.payload,
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
        default:
            return state
    }
}


export const getCartProducts = (payload) => ({
    type: GET_CART_PRODUCTS,
    payload
});
export const removeCartProducts = (payload) => ({
    type: REMOVE_PRODUCT_WITH_CART,
    payload
});

export const getCartList = () => (dispatch) => {
    const cartListItems = getProductWithCart();
    dispatch(getCartProducts(cartListItems))
}

export const showModalDelete = (payload) => ({
    type: SHOW_MODAL_DELETE,
    payload
});

export const closeModalDelete = () => ({
    type: CLOSE_MODAL_DELETE
});

export const modalConfirmDelete = (productId) => (dispatch) => {
    const newCart = removeProductCart(productId)
    dispatch(removeCartProducts(newCart))
    dispatch(closeModalDelete())
}