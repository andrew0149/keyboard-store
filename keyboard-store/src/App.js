import './components/ProductOrderCard'
import ProductOrderCard from './components/ProductOrderCard';
import { Navbar, Container, } from 'react-bootstrap';

function App() {
  return (
    <div className='app'>
      <Navbar>
        <Container>

        </Container>
      </Navbar>

      <div className='wrapper'>
        <div className='bestseller_carousel'>

        </div>
      </div>

      <div className='wrapper'>
        <div className='products_list'>
          <ProductOrderCard title='A' price='1000' description='Abcdef' image='' switches={new Map([['blue', 'Синие'], ['red', 'Красные']])}></ProductOrderCard>
        </div>
      </div>


      <div className='wrapper'>
        <div className='reviews'>

        </div>
      </div>

      <div className='wrapper'>
        <div className='about_us'>

        </div>
      </div>
    </div>
  );
}

export default App;
