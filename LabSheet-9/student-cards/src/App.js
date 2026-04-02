import React from "react";
import StudentCard from "./StudentCard";

function App() {
  const students = [
    { id: 1, name: "Rahul", department: "Computer Science", marks: 85 },
    { id: 2, name: "Anjali", department: "Electronics", marks: 90 },
    { id: 3, name: "Kiran", department: "Mechanical", marks: 78 },
    { id: 4, name: "Sneha", department: "Civil", marks: 88 },
  ];

  return (
    <div style={styles.container}>
      <h1>Student Profiles</h1>
      <div style={styles.cardContainer}>
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            department={student.department}
            marks={student.marks}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default App;