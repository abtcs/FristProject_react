import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() { return <h2>🏠 Welcome to the Home Page</h2>; }
function About() { return <h2>ℹ️ About Our Tech Shop</h2>; }
function NotFound() { return <h2>404 - Page Not Found</h2>; }
export default function RouteMethod1() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '10px', background: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Catch-all route for invalid URLs */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}