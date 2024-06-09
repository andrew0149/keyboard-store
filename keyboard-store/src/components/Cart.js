import { useContext, useState } from 'react';

import { CartContext } from '../context/cart';
import { Modal } from 'react-bootstrap';
import CartItem from './CartItem';
import { PlaceOrder } from '../Api';

export default function Cart() {
    const [show, setShow] = useState(false);
    const [cartInputs, setCartInputs] = useState({
        name: '',
        email: '',
        phone: ''
    });


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeHandler = e => {
        setCartInputs({
            ...cartInputs,
            [e.target.id]: e.target.value
        })
    };

    const { cartItems, clearCart, getCartTotal } = useContext(CartContext);
    return (
        <>
            <button type='button' onClick={handleShow}></button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Корзина</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        cartItems.length === 0 ? <p>Здесь пока пусто: добавьте, пожалуйста, что-нибудь в корзину 🙏🙏</p> :
                            cartItems.map((item) => <CartItem item={item} key={item.id} />)
                    }
                </Modal.Body>
                <Modal.Footer>
                    <input
                        type='text' placeholder='Иванов Иван'
                        pattern='' maxLength={64}
                        className='cart_input'
                        id='name'
                        onChange={changeHandler}
                    />
                    <br />
                    <input
                        type='email' placeholder='example@mail.com'
                        pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$' maxLength={64}
                        className='cart_input'
                        id='email'
                        onChange={changeHandler}
                    />
                    <br />
                    <input
                        type='tel' placeholder='x-xxx-xxx-xx-xx'
                        pattern=''
                        className='cart_input'
                        id='phone'
                        onChange={changeHandler}
                    />
                    <button className='cart_order_button'
                        onClick={
                            () => PlaceOrder(
                                cartInputs.email, cartInputs.phone, cartInputs.name,
                                cartItems.map((item) => item.quantity),
                                cartItems.map((item) => item.id),
                                cartItems.map((item) => item.switchCoeff),
                            )}></button>
                </Modal.Footer>

            </Modal>
        </>
    );
}