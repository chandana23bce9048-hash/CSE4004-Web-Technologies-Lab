const student = {
    id: 101,
    name: "Siri",
    department: "Computer Science",
    marks: 88
};

const { id, name, department, marks } = student;

console.log("--- Initial Student Data ---");
console.log(`ID: ${id}`);
console.log(`Name: ${name}`);
console.log(`Department: ${department}`);
console.log(`Marks: ${marks}`);

const getGrade = (m) => {
    if (m >= 90) return "A";
    if (m >= 80) return "B";
    if (m >= 70) return "C";
    return "F";
};

const updatedStudent = {
    ...student,
    grade: getGrade(student.marks)
};

console.log("\n--- Updated Student Object ---");
console.log(updatedStudent);