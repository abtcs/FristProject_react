import { useState } from 'react'; 
import Cart from './Cart';     
import RealTimeData from './RealTimeData'; 
import DarkMode from './DarkMode';
import CounterApp from './CounterApp';
import RouteMethod1 from './RouteMethod1';

function ProductCard(props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>
      {props.isAvailable ? (
        <span style={{ color: "green", fontWeight: "bold" }}>In Stock</span>
      ) : (
        <span style={{ color: "red", fontWeight: "bold" }}>Out of Stock</span>
      )}
      <p>Quantity: {props.qty}</p>
      <img src={props.imageLink} alt={props.name} style={{ width: "100px", height: "100px" }} />
    </div>
  );
}
const productsDetails = [
  { id: 1, name: "Laptop", price: 999, isAvailable: true, qty: 123, imageLink: "https://picsum.photos/id/0/500/300" },
  { id: 2, name: "Headphones", price: 199, isAvailable: false, qty: 0, imageLink: "https://picsum.photos/id/26/500/300" },
  { id: 3, name: "Keyboard", price: 89, isAvailable: true, qty: 50, imageLink: "https://picsum.photos/id/60/500/300" },
  { id: 4, name: "Mouse", price: 49, isAvailable: true, qty: 200, imageLink: "https://picsum.photos/id/201/500/300" },
];

function Shop() {
  return (
    <div>
      {productsDetails.map((product) => (
        <ProductCard 
          key={product.id}
          {...product}
        />
      ))}
    </div>
  );
}


export default function App() {
  const [currentScreen, setCurrentScreen] = useState('shop');

  const screens = [
    { id: 'shop', label: 'To Do List', element: <Shop /> },
    { id: 'cart', label: '🛒 Go to Cart', element: <Cart onBack={() => setCurrentScreen('shop')} /> },
    { id: 'RealTimeData', label: 'Real-Time Data', element: <RealTimeData /> },
    { id: 'DarkMode', label: 'Dark Mode', element: <DarkMode /> },
    { id: 'CounterApp', label: 'Counter App', element: <CounterApp /> },
    { id: 'RouteMethod1', label: 'Routing Method 1', element: <RouteMethod1 /> },
  ];

  const activeScreen = screens.find((screen) => screen.id === currentScreen) ?? screens[0];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <h1>My Tech Shop</h1>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {screens.map((screen) => (
            <button
              key={screen.id}
              onClick={() => setCurrentScreen(screen.id)}
              style={{ padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              {screen.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        {activeScreen.element}
      </div>
    </div>
  );
}
