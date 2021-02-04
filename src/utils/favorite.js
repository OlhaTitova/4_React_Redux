
export function isFavorite(itemId) {

    const favorite = JSON.parse(localStorage.getItem('favoriteList')) || [];
    return favorite.indexOf(itemId) > -1;
}


export function getProductFavorite() {
    return JSON.parse(localStorage.getItem('favoriteList')) || [];
}