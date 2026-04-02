import React, { useState } from "react";
import ListItem from "./ListItem";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  // Add item
  const addItem = () => {
    if (input.trim() === "") return;

    const newItem = {
      id: Date.now(),
      text: input,
    };

    setItems([...items, newItem]);
    setInput("");
  };

  // Remove item
  const removeItem = (id) => {
    const updatedList = items.filter((item) => item.id !== id);
    setItems(updatedList);
  };

  return (
    <div style={styles.container}>
      <h1>Dynamic List App</h1>

      {/* Input Section */}
      <input
        type="text"
        placeholder="Enter item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={styles.input}
      />
      <button onClick={addItem} style={styles.addButton}>
        Add
      </button>

      {/* List Section */}
      {items.length === 0 ? (
        <p>No items in the list</p>
      ) : (
        <ul>
          {items.map((item) => (
            <ListItem key={item.id} item={item} onDelete={removeItem} />
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  input: {
    padding: "10px",
    marginRight: "10px",
  },
  addButton: {
    padding: "10px",
    cursor: "pointer",
  },
};

export default App;