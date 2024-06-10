import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])

    const addToCart = (item, count) => {
    
        const isItemInCart = cartItems.find((cartItem) => (cartItem.id === item.id && cartItem.switchType[0] === item.switchType[0]));

        console.log(item);

        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) =>
                    (cartItem.id === item.id && cartItem.switchType[0] === item.switchType[0])
                        ? { ...cartItem, quantity: Math.min(cartItem.quantity + count, cartItem.max_order) }
                        : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: count }]);
        }

        console.log(cartItems);
    };

    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => (cartItem.id === item.id && cartItem.switchType[0] === item.switchType[0]));

        if (isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter((cartItem) => !(cartItem.id === item.id && cartItem.switchType[0] === item.switchType[0])));
        } else {
            setCartItems(
                cartItems.map((cartItem) =>
                    (cartItem.id === item.id && cartItem.switchType[0] === item.switchType[0])
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
            );
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return Math.round(cartItems.reduce((total, item) => total + item.price * item.quantity * item.switchType[1], 0));
    };

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
            setCartItems(JSON.parse(cartItems));
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getCartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};