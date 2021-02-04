import { getProductFavorite } from "../utils/favorite";

const FAVORITE_PRODUCTS = 'FAVORITE_PRODUCTS';

export const MODULE_NAME = 'favorite';
export const selectFavorite = state => state[MODULE_NAME].favoriteProducts;

const initialState = {
    favoriteProducts: {},
}

export function favoriteReducer(state = initialState, action) {
    switch (action.type) {
        case FAVORITE_PRODUCTS:
            return {
                ...state,
                favoriteProducts: action.payload
            }
        default:
            return state
    }
}

export const favoriteProducts = (payload) => ({
    type: FAVORITE_PRODUCTS,
    payload
});

export const getFavoriteList = () => (dispatch) => {

    const favoriteList = getProductFavorite();
    dispatch(favoriteProducts(favoriteList))
}

export const toggleFavorite = (item) => (dispatch) => {
    const favorite = JSON.parse(localStorage.getItem('favoriteList')) || {};
    if (favorite[item.id]) {
        delete favorite[item.id];
    } else {
        favorite[item.id] = item;
    }
    localStorage.setItem('favoriteList', JSON.stringify(favorite))
    dispatch(favoriteProducts(favorite))
}