import Products from './components/Products';
import NavigationBar from './components/NavigationBar';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='app'>
      <NavigationBar />

      <div className='wrapper' id='bestsellers'>
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
