import {GetShopItems, PlaceOrder} from './Api';
import './components/ProductOrderCard'
import ProductOrderCard from './components/ProductOrderCard';
import { Navbar, Container, Placeholder, } from 'react-bootstrap';

function GetProductCards(){
  var ShopItems = GetShopItems()
  var output = new Array([])
  ShopItems.forEach(element => {
    var Item = Object.values(element)
    output.push(<ProductOrderCard title={Item[0]} price={Item[2]} description={Item[1]} image={Item[3]} id = {Item[4]} switches={new Map([['blue', 'Синие'], ['red', 'Красные'], ['black', 'Черные']])}></ProductOrderCard>)
  });
  return output
}

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
          {
            GetProductCards()
          }
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
    <div className='cart'>
          <div className='place_order'>
            
          </div>
    </div>
    </div>
  );
}

export default App;
