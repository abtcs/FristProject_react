import { useState } from 'react'; // 1. Import useState
import Cart from './Cart';       // 2. Import your new Cart file

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

export default function App() {
  // 3. Track which screen to show ('shop' or 'cart')
  const [currentScreen, setCurrentScreen] = useState('shop');

  // 4. CONDITIONAL NAVIGATION: If currentScreen is 'cart', swap the UI entirely
  if (currentScreen === 'cart') {
    return <Cart onBack={() => setCurrentScreen('shop')} />;
  }

  // Otherwise, show your original Tech Shop UI
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>My Tech Shop</h1>
        
        {/* 5. The "href" button: Clicking this changes state to 'cart' */}
        <button 
          onClick={() => setCurrentScreen('cart')}
          style={{ padding: "10px 20px", cursor: "pointer", fontWeight: "bold" }}
        >
          🛒 Go to Cart
        </button>
      </div>

      {productsDetails.map((product, index) => (
        <ProductCard 
          key={index}
          name={product.name}
          price={product.price}
          isAvailable={product.isAvailable}
          qty={product.qty}
          imageLink={product.imageLink}
        />
      ))}
    </div>
  );
}