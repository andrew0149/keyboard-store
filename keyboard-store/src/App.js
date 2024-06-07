import './components/ProductOrderCard'
import ProductOrderCard from './components/ProductOrderCard';


function App() {
  return (
    <div className="app"> 
      <ProductOrderCard title='A' price='1000' description='Abcdef' image='' switches={new Map([['blue', 'Синие'], ['red', 'Красные']])}></ProductOrderCard>
    </div>
  );
}

export default App;
