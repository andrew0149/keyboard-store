import React, { useState } from "react";

export default function ProductOrderCard(props) {
    const [count, setCount] = useState(1);
    const [switchCoeff, setSwitchCoeff] = useState(1.0);
    const switchesKeyValuePairs = Array.from(props.switches);

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

    function addToCart() {

    }

    return (
        <div className="card">
            <img src={props.image} alt={props.title} />

            <h3 className="title">{props.title}</h3>

            <p className="description">{props.description}</p>

            <select
                onChange={e => handleSwitchTypeChange(e)}
                className="switch_selector" >
                <optgroup label="Типы свитчей" />
                {
                    switchesKeyValuePairs.map(
                        pair => <option value={pair[0]}>{pair[1]}</option>
                    )
                }
            </select>

            <br />

            <span className="price">{props.price * count * switchCoeff}₽</span>

            <div className="count_box">
                <input type="button" value="-" className="decrease" onClick={decreaseCount} disabled={count <= 1} />
                <input type="text" value={count} className="count" readOnly="readonly" />
                <input type="button" value="+" className="increase" onClick={increaseCount} disabled={count >= 10}/>
                <input type="button" value="🛒" className="purchase" onClick={addToCart} />
            </div>

        </div>
    );
}   