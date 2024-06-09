import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselElement from './CarouselElement';

import carouselimage1 from '../images/carouselimage1.webp';
import carouselimage2 from '../images/carouselimage2.webp';
import carouselimage3 from '../images/carouselimage3.webp';

const CAROUSEL_ELEMENTS = [
    { image: carouselimage1, title: 'Keyboard #1', description: 'Keyboard #1 is best!' },
    { image: carouselimage2, title: 'Keyboard #2', description: 'Keyboard #2 is best!' },
    { image: carouselimage3, title: 'Keyboard #3', description: 'Keyboard #3 is best!' }
];

export default function BestsellersCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
            {
                CAROUSEL_ELEMENTS.map((element, key) =>
                    <Carousel.Item key={key}>
                        <CarouselElement image={element.image} title={element.title} description={element.description} />
                    </Carousel.Item>)
            }
        </Carousel>
    );
}

