import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);       // store fetched data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null);     // error state

  useEffect(() => {
    // fetch data from API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // runs only once

  return (
    <div style={styles.container}>
      <h1>User List</h1>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p style={styles.error}>{error}</p>}

      {/* Data */}
      {!loading && !error && (
        <ul>
          {data.map((user) => (
            <li key={user.id} style={styles.item}>
              <strong>{user.name}</strong> <br />
              {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
  },
  item: {
    listStyle: "none",
    margin: "10px",
    padding: "10px",
    border: "1px solid #ccc",
  },
  error: {
    color: "red",
  },
};

export default App;