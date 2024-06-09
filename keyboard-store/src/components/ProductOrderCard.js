import { React, useState, useContext, useEffect } from "react";
import { CartContext } from "../context/cart";


export default function ProductOrderCard(product) {
    const { cartItems, addToCart } = useContext(CartContext);
    const [count, setCount] = useState(1);
    const [switchCoeff, setSwitchCoeff] = useState(1.0);
    const switchesKeyValuePairs = product.switches ? Array.from(product.switches) : null;

    function handleSwitchTypeChange(element) {
        switch (element.target.value) {
            case 'blue':
                setSwitchCoeff(1.0);
                break;
            case 'red':
                setSwitchCoeff(1.2);
                break;
            case 'black':
                setSwitchCoeff(1.4);
                break;
            default:
                alert('Something went wrong!');
                break;
        }
    }

    function increaseCount() {
        setCount(count + 1);
    }

    function decreaseCount() {
        setCount(count - 1);
    }

    return (
        <div className="product_card" id={product.id}>
            <div className="image_block">
                <img className="product_image" src={product.image} alt={product.title} />
            </div>
            <h3 className="title">{product.title}</h3>

            <p className="description">{product.description}</p>

            {
                !product.switches ? ' ' : <select
                    onChange={e => handleSwitchTypeChange(e)}
                    className="switch_selector" >
                    <optgroup label="Типы свитчей" />
                    {
                        switchesKeyValuePairs.map(
                            (pair, key) => <option key={key} value={pair[0]}>{pair[1]}</option>
                        )
                    }
                </select>
            }

            <br />

            <span className="price">{Math.round(product.price * count * switchCoeff)}₽</span>

            <div className="count_box">
                <input type="button" value="-" className="decrease" onClick={decreaseCount} disabled={count <= 1} />
                <input type="text" value={count} className="count" readOnly="readonly" />
                <input type="button" value="+" className="increase" onClick={increaseCount} disabled={count >= product.max_order} />
                <input type="button" value=" " className="purchase" onClick={() => addToCart(product)} />
            </div>

        </div>
    );
}   