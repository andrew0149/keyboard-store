import NavigationBar from './components/NavigationBar';
import BestsellersCarousel from './components/BestsellersCarousel';
import Products from './components/Products';
import Cart from './components/Cart';

import 'bootstrap/dist/css/bootstrap.min.css';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className='app'>
      <NavigationBar />
      <Cart />

      <div className='wrapper' id='bestsellers'>
        <BestsellersCarousel />
      </div>

      <div className='wrapper' id='products'>
        <Products />
      </div>

      <div className='wrapper' id='about_us'>
        <div className='about_us'>
          <h2>О нас</h2>
          <p>Многолетний опыт сборки высококачественных механических и мембранных клавиатур позволяет
            считать нашу компанию лидером на рынке. За время существования нашего бренда мы сумели
            найти и отобрать лучшие материалы для производства клавиатур, а также применить в нашей
            продукции все новейшие технологии.</p>
          <div className='contact_info_block'>
            <ContactInfo title='Напишите нам' data='contact_us@keybored.com' />
            <ContactInfo title='Адрес нашего шоурума' data='г. Екатеринбург, проспект Ленина, д. 0' />
            <ContactInfo title='Время работы' data='Ежедневно: 9:00 - 18:00' />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
