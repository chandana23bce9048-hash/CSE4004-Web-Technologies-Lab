import React from "react";

// StudentProfile Component
function StudentProfile() {
  const name = "John Doe";
  const department = "Computer Science";
  const year = "3rd Year";
  const section = "A";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Student Profile
        </h1>

        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Department:</strong> {department}
        </p>
        <p>
          <strong>Year:</strong> {year}
        </p>
        <p>
          <strong>Section:</strong> {section}
        </p>
      </div>
    </div>
  );
}

// App Component
export default function App() {
  return (
    <div>
      <StudentProfile />
    </div>
  );
}