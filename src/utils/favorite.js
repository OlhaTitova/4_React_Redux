export function toggleFavorite(itemId) {

    const favorite = JSON.parse(localStorage.getItem('favoriteList')) || [];

    if (favorite.indexOf(itemId) > -1) {
        favorite.splice(favorite.indexOf(itemId), 1);
    } else {
        favorite.push(itemId);
    }
    localStorage.setItem('favoriteList', JSON.stringify(favorite))
}


export function isFavorite(itemId) {

    const favorite = JSON.parse(localStorage.getItem('favoriteList')) || [];
    return favorite.indexOf(itemId) > -1;
}


export function getProductFavorite() {
    return JSON.parse(localStorage.getItem('favoriteList')) || [];
}