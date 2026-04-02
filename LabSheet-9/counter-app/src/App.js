import React, { useState } from "react";

function App() {
  // Initialize counter state
  const [count, setCount] = useState(0);

  // Function to increment counter
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to decrement counter
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={styles.container}>
      <h1>Simple Counter</h1>

      {/* Display Counter Value */}
      <h2>{count}</h2>

      {/* Buttons */}
      <div>
        <button style={styles.button} onClick={handleIncrement}>
          Increment
        </button>

        <button style={styles.button} onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

// Styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  button: {
    padding: "10px 20px",
    margin: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default App;