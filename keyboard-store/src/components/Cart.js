import { useContext, useState } from 'react';

import { CartContext } from '../context/cart';
import { Modal } from 'react-bootstrap';
import CartItem from './CartItem';

export default function Cart() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);
    return (
        <>
            <button type='button' onClick={handleShow}></button>
            <Modal show={show} onHide={handleClose}>
                {cartItems.map((item) => (
                    <CartItem/>
                ))}
            </Modal>
        </>
    );
}