import logo from './images/logo.png';
import ProductOrderCard from './components/ProductOrderCard';

import 'bootstrap/dist/css/bootstrap.min.css';

import { GetShopItems, PlaceOrder } from './Api';
import { Navbar, Container, Nav } from 'react-bootstrap';

function GetProductCards() {
  var ShopItems = GetShopItems();
  var output = [];
  ShopItems.forEach(element => {
    output.push(
      <ProductOrderCard
        key={element.id}
        id={element.id}
        title={element.title} description={element.description}
        price={element.price} image={element.image_path}
        switches={new Map([['blue', 'Синие'], ['red', 'Красные'], ['black', 'Черные']])}
      />);
  });
  return output;
}

function App() {
  return (
    <div className='app'>
      <Navbar className="bg-body-tertiary" expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="KeyBored" src={logo}
              width="30" height="30"
              className="d-inline-block align-top"
            />{' '}
            KeyBored
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#bestsellers">Бестселлеры</Nav.Link>
              <Nav.Link href="#products">Все товары</Nav.Link>
              <Nav.Link href="#reviews">Отзывы</Nav.Link>
              <Nav.Link href="#about_us">О нас</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='wrapper' id='bestsellers'>
      </div>

      <div className='wrapper' id='products'>
        {GetProductCards()}
      </div>


      <div className='wrapper' id='reviews'>
      </div>

      <div className='wrapper' id='about_us'>
      </div>
      {/* <div className='cart'>
        <div className='place_order'>

        </div>
      </div> */}
    </div>
  );
}

export default App;
