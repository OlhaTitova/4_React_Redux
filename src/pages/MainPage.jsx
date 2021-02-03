import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import { CartPage } from "./CartPage";
import { FavoritePage } from './FavoritePage';
import { ShopPage } from './ShopPage';
import { HomePage } from './HomePage';
import { Header } from "../components/Header/Header";


export function MainPage() {

    return (
        <Router>
            <div>
                <Header />
                <div className="Menu">
                    <NavLink className="MenuItems" to="/">HOME</NavLink>
                    <NavLink className="MenuItems" to="/shop">SHOP</NavLink>
                    <NavLink className="MenuItems" to="/favorite">FAVORITE</NavLink>
                    <NavLink className="MenuItems" to="/cart">CART</NavLink>
                </div>
                <Switch>
                    <Route exact path="/" >
                        <HomePage />
                    </Route>
                    <Route path="/shop">
                        <ShopPage />
                    </Route>
                    <Route path="/favorite">
                        <FavoritePage />
                    </Route>
                    <Route path="/cart">
                        <CartPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
