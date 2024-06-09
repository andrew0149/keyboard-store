import NavigationBar from './components/NavigationBar';
import BestsellersCarousel from './components/BestsellersCarousel';
import Products from './components/Products';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='app'>
      <NavigationBar />

      <div className='wrapper' id='bestsellers'>
        <BestsellersCarousel />
      </div>

      <div className='wrapper' id='products'>
        <Products />
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
