import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { MODULE_NAME as modalAddModuleName, modalAddReducer } from './modalAdd';
import { MODULE_NAME as productsModuleName, productsReducer } from './products';
import { MODULE_NAME as favoriteModuleName, favoriteReducer } from './favorite';
import { MODULE_NAME as cartModuleName, cartReducer } from './cart';


const rootReducer = combineReducers({
    [modalAddModuleName]: modalAddReducer,
    [productsModuleName]: productsReducer,
    [favoriteModuleName]: favoriteReducer,
    [cartModuleName]: cartReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;