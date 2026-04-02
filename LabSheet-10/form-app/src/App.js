import React, { useState } from "react";

function App() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation function
  const validate = () => {
    let tempErrors = {};

    if (!formData.name) {
      tempErrors.name = "Name is required";
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    return tempErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    // If no errors → submit
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div style={styles.container}>
      <h1>User Form</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.name && <p style={styles.error}>{errors.name}</p>}

        {/* Email */}
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.email && <p style={styles.error}>{errors.email}</p>}

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.password && <p style={styles.error}>{errors.password}</p>}

        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

// Styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  form: {
    display: "inline-block",
    textAlign: "left",
  },
  input: {
    display: "block",
    margin: "10px 0",
    padding: "10px",
    width: "250px",
  },
  button: {
    padding: "10px",
    width: "100%",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
    margin: "0",
  },
};

export default App;