import { useState } from 'react';

export default function Cart({ onBack }) {
  const [items, setItems] = useState([
    { id: 1, name: 'Milk', bought: false },
    { id: 2, name: 'Eggs', bought: true }
  ]);
  const [newItemName, setNewItemName] = useState('');

  function handleInputChange(event) {
    setNewItemName(event.target.value);
  }

  function handleAddItem() {
    if (newItemName.trim() === '') return;

    const newItem = {
      id: Date.now(),
      name: newItemName,
      bought: false
    };

    setItems([...items, newItem]);
    setNewItemName('');
  }

  function toggleBought(id) {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, bought: !item.bought } : item
    );
    setItems(updatedItems);
  }

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <button
        onClick={onBack}
        style={{ padding: '8px 16px', cursor: 'pointer', marginBottom: '16px' }}
      >
        ← Go Back to Previous Page
      </button>

      <h2>My Shopping List</h2>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <input
          type="text"
          value={newItemName}
          onChange={handleInputChange}
          placeholder="Add an item..."
          style={{ flex: 1, padding: '8px' }}
        />
        <button onClick={handleAddItem} style={{ padding: '8px 16px' }}>
          Add
        </button>
      </div>

      {items.length === 0 && <p>Your list is empty. Add some groceries!</p>}

      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => toggleBought(item.id)}
            style={{
              cursor: 'pointer',
              textDecoration: item.bought ? 'line-through' : 'none',
              color: item.bought ? 'gray' : 'black',
              padding: '8px 0'
            }}
          >
            {item.name} {item.bought ? '✅' : '⬜'}
          </li>
        ))}
      </ul>
    </div>
  );
}
