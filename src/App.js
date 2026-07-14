


function ProductCard(props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
      {/* Displaying the product name */}
      <h3>{props.name}</h3>
      
      {/* Displaying the price */}
      <p>Price: ${props.price}</p>
      
      {/* JavaScript conditional (ternary) operator for stock status */}
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
  { 
    id: 1, 
    name: "Laptop", 
    price: 999, 
    isAvailable: true, 
    qty: 123, 
    imageLink: "https://picsum.photos/id/0/500/300" // Stable laptop photo
  },
  { 
    id: 2, 
    name: "Headphones", 
    price: 199, 
    isAvailable: false, 
    qty: 0, 
    imageLink: "https://picsum.photos/id/26/500/300" // Stable tech gadget photo
  },
  { 
    id: 3, 
    name: "Keyboard", 
    price: 89, 
    isAvailable: true, 
    qty: 50, 
    imageLink: "https://picsum.photos/id/60/500/300" // Stable desktop/typing photo
  },
  { 
    id: 4, 
    name: "Mouse", 
    price: 49, 
    isAvailable: true, 
    qty: 200, 
    imageLink: "https://picsum.photos/id/201/500/300" // Stable setup photo
  },
];

export default function App() {
  return (
    <div>
      <h1>My Tech Shop</h1>

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