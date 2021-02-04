
export function isFavorite(itemId) {

    const favorite = JSON.parse(localStorage.getItem('favoriteList')) || [];
    console.log(favorite[itemId]);
    return favorite[itemId];
}


export function getProductFavorite() {
    return JSON.parse(localStorage.getItem('favoriteList')) || [];
}