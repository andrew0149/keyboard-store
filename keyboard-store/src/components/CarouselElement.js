import Carousel from 'react-bootstrap/Carousel';

export default function CarouselElement(props) {
    return (
        <div className='carousel_block'>
            <div className='carousel_text'>
                <h3 className='carousel_title'>{props.title}</h3>
                <p className='carousel_description'>{props.description}</p>
            </div>
            <img src={props.image} className='carousel_image' />
        </div>
    );
}