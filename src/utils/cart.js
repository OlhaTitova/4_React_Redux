/**
 * @param {string} itemId
 */

export function addToCart(item) {

    const cart = JSON.parse(localStorage.getItem('cardList')) || {};
    console.log(item.count);
    if (!cart[item.id]) {
        cart[item.id] = item;
        item.count = item.count + 1;
    } else {
        item.count = item.count + 1;
    }
    console.log(item.count);
    console.log(cart);
    localStorage.setItem('cardList', JSON.stringify(cart));
}


export const getProductWithCart = () => {

    return JSON.parse(localStorage.getItem('cardList')) || {};
}


export function removeProductCart(itemId) {

    if (itemId === null) return;
    const cart = JSON.parse(localStorage.getItem('cardList')) || {};
    console.log(cart);
    delete cart[itemId]
    localStorage.setItem('cardList', JSON.stringify(cart));
    return cart;
}