import React from "react";
import { FavoriteList } from "../components/FavoriteList.jsx/FavoriteList";


export const FavoritePage = () => {

    return (
        <div>
            <div className="container">
                <h1 className="heading-page">Favorite</h1>
                <FavoriteList />
            </div>
        </div>
    )
}