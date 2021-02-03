import React from "react";
import PropTypes from 'prop-types';
import { CartList } from "../components/CartList/CartList";


export const CartPage = () => {
    return (
        <div className="container">
            <h1 className="heading-page">Cart</h1>
            <CartList />
        </div>
    )
}

CartPage.propTypes = {
    product: PropTypes.object,
}

      // const [modalDeleteID, setModalDeleteID] = useState(null);

    // const handleModalClose = () => setModalDeleteID(null);

    // const handleModalConfirm = () => {
    //     removeProductCart(modalDeleteID)
    //     handleModalClose()
    // }