import { getServerData } from "./getServerData";


const GET_PRODUCTS = "GET_PRODUCTS";

export const MODULE_NAME = 'product';
export const selectProducts = state => state[MODULE_NAME].products;

const initialState = {
    products: [],
}

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}

export const getProducts = (payload) => ({
    type: GET_PRODUCTS,
    payload
});

export const getProductList = () => async (dispatch) => {
    try {
        const data = await getServerData();
        dispatch(getProducts(data));

    } catch (error) {
        console.log('error');
    }
}
