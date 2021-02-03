"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.toggleFavorite = exports.getFavoriteList = exports.modalConfirmAddToCart = exports.getProductList = exports.favoriteProduct = exports.modalClose = exports.showModalAddToCard = exports.getProducts = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _cart = require("../components/utils/cart");

var _favorite = require("../components/utils/favorite");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const [list, setList] = useState(getProductFavorite());
// products = products.filter(product => list.find(item => item === product.id));
// const handleFavoriteList = () => setList(getProductFavorite());
// ACTIONS
var GET_PRODUCTS = "GET_PRODUCTS";
var SHOW_MODAL_ADD_TO_CARD = 'SHOW_MODAL_ADD_TO_CARD';
var MODAL_CLOSE = 'MODAL_CLOSE';
var FAVORITE_PRODUCTS = 'FAVORITE_PRODUCTS';
var SHOW_MODAL_DELETE = 'SHOW_MODAL_DELETE'; // REDUCER

var initialState = {
  products: [],
  modalProductId: null,
  modalDeleteID: null,
  favoriteProducts: [],
  modalDelete: null
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_PRODUCTS:
      return _objectSpread({}, state, {
        products: action.payload
      });

    case SHOW_MODAL_ADD_TO_CARD:
      return _objectSpread({}, state, {
        modalProductId: action.payload
      });

    case MODAL_CLOSE:
      return _objectSpread({}, state, {
        modalProductId: null
      });

    case FAVORITE_PRODUCTS:
      console.log('updated in reducer');
      return _objectSpread({}, state, {
        favoriteProducts: state.products.filter(function (product) {
          return action.payload.find(function (item) {
            return item === product.id;
          });
        })
      });

    default:
      return state;
  }
}

var getProducts = function getProducts(payload) {
  return {
    type: GET_PRODUCTS,
    payload: payload
  };
};

exports.getProducts = getProducts;

var showModalAddToCard = function showModalAddToCard(payload) {
  return {
    type: SHOW_MODAL_ADD_TO_CARD,
    payload: payload
  };
};

exports.showModalAddToCard = showModalAddToCard;

var modalClose = function modalClose() {
  return {
    type: MODAL_CLOSE
  };
};

exports.modalClose = modalClose;

var favoriteProduct = function favoriteProduct(payload) {
  return {
    type: FAVORITE_PRODUCTS,
    payload: payload
  };
}; // MIDDLEWARE


exports.favoriteProduct = favoriteProduct;

var getProductList = function getProductList() {
  return function _callee(dispatch) {
    var res, data, favorite;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch('cardProduct.json'));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(res.json());

          case 5:
            data = _context.sent;
            favorite = data.filter(function (product) {
              var item = JSON.parse(localStorage.getItem('favoriteList'));
              item.f;
            });
            console.log(favorite);
            dispatch(getProducts(data));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.getProductList = getProductList;

var modalConfirmAddToCart = function modalConfirmAddToCart(productId) {
  return function (dispatch) {
    (0, _cart.addToCart)(productId);
    dispatch(modalClose());
  };
};

exports.modalConfirmAddToCart = modalConfirmAddToCart;

var getFavoriteList = function getFavoriteList() {
  return function (dispatch) {
    console.log('loaded');
    var favoriteList = (0, _favorite.getProductFavorite)();
    dispatch(favoriteProduct(favoriteList));
  };
};

exports.getFavoriteList = getFavoriteList;

var toggleFavorite = function toggleFavorite(itemId) {
  return function (dispatch) {
    var favorite = JSON.parse(localStorage.getItem('favoriteList')) || [];

    if (favorite.indexOf(itemId) > -1) {
      favorite.splice(favorite.indexOf(itemId), 1);
    } else {
      favorite.push(itemId);
    }

    localStorage.setItem('favoriteList', JSON.stringify(favorite));
    dispatch(favoriteProduct(favorite));
  };
};

exports.toggleFavorite = toggleFavorite;
var store = (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk["default"]));
var _default = store;
exports["default"] = _default;