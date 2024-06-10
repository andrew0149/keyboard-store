import { CartContext } from "../context/cart";
import { useContext } from "react";

const SWITCHES = new Map([['blue', 'Синие'], ['red', 'Красные'], ['black', 'Черные']]);

export default function CartItem({ item }) {
    const { addToCart, removeFromCart } = useContext(CartContext);

    return (
        <div className="cart_item">
            <div className="cart_item_info">
                <img src={item.image} alt={item.title} className="cart_item_image" />
                <span className="cart_item_title">{item.title} {!item.switchType[0] ? null : `(${SWITCHES.get(item.switchType[0])})`}</span>
            </div>
            <div className="cart_count_box">
                <input type="button" value="-" className="decrease" onClick={() => removeFromCart(item)} />
                <input type="text" value={item.quantity} className="count" readOnly="readonly" />
                <input type="button" value="+" className="increase" onClick={() => addToCart(item, 1)} disabled={item.quantity >= item.max_order} />
                <span className="cart_price">{`${Math.round(item.price * item.switchType[1])}₽`}</span>
            </div>
        </div>
    );
}