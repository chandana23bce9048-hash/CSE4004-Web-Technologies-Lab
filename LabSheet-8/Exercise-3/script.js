class Course {
    constructor(courseName, instructor, totalSeats) {
        this.courseName = courseName;
        this.instructor = instructor;
        this.totalSeats = totalSeats;
        this.enrolledCount = 0;
    }

    displayDetails() {
        console.log(`Course: ${this.courseName} | Instructor: ${this.instructor}`);
    }

    enrollStudent() {
        return new Promise((resolve, reject) => {
            if (this.enrolledCount < this.totalSeats) {
                this.enrolledCount++;
                resolve("Enrollment Successful");
            } else {
                reject("Course Full");
            }
        });
    }
}

const myCourse = new Course("web technologies", "prof.lasya", 2);

myCourse.displayDetails();

myCourse.enrollStudent()
    .then(message => console.log(message))
    .catch(error => console.error(error));

myCourse.enrollStudent()
    .then(message => console.log(message))
    .catch(error => console.error(error));

myCourse.enrollStudent()
    .then(message => console.log(message))
    .catch(error => console.error(error));