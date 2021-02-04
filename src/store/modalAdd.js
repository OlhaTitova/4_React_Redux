import { addToCart } from "../utils/cart";


const SHOW_MODAL_ADD_TO_CART = 'SHOW_MODAL_ADD_TO_CART';
const CLOSE_MODAL_ADD = 'CLOSE_MODAL_ADD';

export const MODULE_NAME = 'modaladd';
export const selectModalAdd = state => state[MODULE_NAME].modalProductId;

const initialState = {
    modalProductId: null,
}

export function modalAddReducer(state = initialState, action) {
    switch (action.type) {
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
        default:
            return state
    }
}

export const showModalAddToCart = (payload) => ({
    type: SHOW_MODAL_ADD_TO_CART,
    payload
});

export const closeModalAdd = () => ({
    type: CLOSE_MODAL_ADD
});

export const modalConfirmAddToCart = (product) => (dispatch) => {
    addToCart(product)
    dispatch(closeModalAdd())
}