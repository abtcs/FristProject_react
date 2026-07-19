import { useState, useEffect } from 'react';

export default function RealTimeData() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const selectedUser = users.find(user => user.id === selectedUserId);

  if (isLoading) return <h2>⏳ Loading real-time users...</h2>;
  if (error) return <h2>❌ Error: {error}</h2>;

  return (
    <div style={{ padding: '20px', maxWidth: '760px' }}>
      <h2>Live Active Users</h2>

      {!selectedUser ? (
        <>
          <p>Select a user to view full details.</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {users.map(user => (
              <li
                key={user.id}
                onClick={() => setSelectedUserId(user.id)}
                style={{
                  cursor: 'pointer',
                  padding: '12px',
                  marginBottom: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  background: '#fafafa'
                }}
              >
                <strong>{user.id}.</strong> {user.name} ({user.username})
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div>
          <button
            onClick={() => setSelectedUserId(null)}
            style={{ padding: '10px 16px', cursor: 'pointer', marginBottom: '20px' }}
          >
            ← Back to user list
          </button>

          <h3>{selectedUser.name} (ID {selectedUser.id})</h3>
          <p><strong>Username:</strong> {selectedUser.username}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Phone:</strong> {selectedUser.phone}</p>
          <p><strong>Website:</strong> {selectedUser.website}</p>

          <section style={{ marginTop: '18px' }}>
            <h4>Address</h4>
            <p>{selectedUser.address.street}, {selectedUser.address.suite}</p>
            <p>{selectedUser.address.city}, {selectedUser.address.zipcode}</p>
            <p><strong>Geo:</strong> {selectedUser.address.geo.lat}, {selectedUser.address.geo.lng}</p>
          </section>

          <section style={{ marginTop: '18px' }}>
            <h4>Company</h4>
            <p><strong>Name:</strong> {selectedUser.company.name}</p>
            <p><strong>Catchphrase:</strong> {selectedUser.company.catchPhrase}</p>
            <p><strong>BS:</strong> {selectedUser.company.bs}</p>
          </section>
        </div>
      )}
    </div>
  );
}
