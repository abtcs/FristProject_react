import { createContext, useState, useContext } from 'react';

// Step 1: Create the Context Cloud
const ThemeContext = createContext();

export default function DarkMode() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Step 2: Provide the context to the app using .Provider
  // Everything inside this wrapper now has access to the value object
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ 
        background: theme === 'light' ? '#fff' : '#333', 
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px' 
      }}>
        <h1>Welcome to My App</h1>
        <Header />
      </div>
    </ThemeContext.Provider>
  );
}

// Middle Component that doesn't care about the theme props at all!
function Header() {
  return (
    <header style={{ border: '1px solid gray', padding: '10px' }}>
      <h3>Header Component</h3>
      <Navbar />
    </header>
  );
}

function Navbar() {
  return (
    <nav>
      <span>Home | About | </span>
      <ThemeButton />
    </nav>
  );
}

// Deeply Nested Child Component
function ThemeButton() {
  // Step 3: Consume the data using the useContext Hook
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}