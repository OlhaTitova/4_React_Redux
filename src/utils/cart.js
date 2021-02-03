/**
 * @param {string} itemId
 */

export function addToCart(itemId) {

    const cart = JSON.parse(localStorage.getItem('cardList')) || {};
    cart[itemId] = (cart[itemId] || 0) + 1;
    localStorage.setItem('cardList', JSON.stringify(cart));
}


export const getProductWithCart = () => {

    return JSON.parse(localStorage.getItem('cardList')) || {};
}


export function removeProductCart(itemId) {

    if (itemId === null) return;
    const cart = JSON.parse(localStorage.getItem('cardList')) || {};
    delete cart[itemId]
    localStorage.setItem('cardList', JSON.stringify(cart))
}