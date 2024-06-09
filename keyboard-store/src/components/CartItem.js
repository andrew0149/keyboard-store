import { CartContext } from "../context/cart";
import { useContext } from "react";

export default function CartItem({ item }) {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);

    return (
        <div className="cart_item">
            <div className="cart_item_info">
                <img src={item.image} className="cart_item_image" />
                <span className="cart_item_title">{item.title}</span>
            </div>
            <div className="cart_count_box">
                <input type="button" value="-" className="decrease" onClick={() => removeFromCart(item)} />
                <input type="text" value={item.quantity} className="count" readOnly="readonly" />
                <input type="button" value="+" className="increase" onClick={() => addToCart(item)} disabled={item.quantity >= item.max_order} />
            </div>
        </div>
    );
}