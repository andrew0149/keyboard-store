import ProductOrderCard from "./ProductOrderCard";
import { GetShopItems } from "../Api";

const SWITCHES = new Map([['blue', 'Синие'], ['red', 'Красные'], ['black', 'Черные']]);

export default function Products(props) {
    
    var shopItems = GetShopItems();

    return shopItems.map(element =>
        <ProductOrderCard
            key={element.id}
            id={element.id}
            title={element.title} description={element.description}
            price={element.price} image={`${process.env.PUBLIC_URL}${element.image_path}`}
            switches={element.mechanical ? SWITCHES : null}
        />
    );
}