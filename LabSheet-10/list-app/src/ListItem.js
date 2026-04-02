import React from "react";

function ListItem({ item, onDelete }) {
  return (
    <li style={styles.item}>
      {item.text}
      <button style={styles.button} onClick={() => onDelete(item.id)}>
        Remove
      </button>
    </li>
  );
}

const styles = {
  item: {
    margin: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    width: "300px",
  },
  button: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default ListItem;