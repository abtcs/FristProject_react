import { useParams, Link } from 'react-router-dom';

// Dummy dataset representing items in a database
const PRODUCTS = [
  { id: '1', name: 'Laptop', price: 999, description: 'High performance laptop.' },
  { id: '2', name: 'Headphones', price: 199, description: 'Noise cancelling audio.' },
  { id: '3', name: 'Keyboard', price: 89, description: 'Mechanical RGB keyboard.' },
  { id: '4', name: 'Mouse', price: 49, description: 'Wireless ergonomic mouse.' }
];

export function ProductDetail() {
  // Extract the dynamic parameter ':id' from the URL
  const { id } = useParams();

  // Find the matching product from our data using the URL id
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return <h2>❌ Product not found!</h2>;
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
      <Link to="/products">← Back to All Products</Link>
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p>{product.description}</p>
      <p><em>(Loaded dynamically because URL is /product/{id})</em></p>
    </div>
  );
}