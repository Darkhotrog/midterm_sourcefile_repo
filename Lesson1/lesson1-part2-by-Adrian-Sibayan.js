// Upgrade to a Student Class
class Student {
    constructor(name, scores) {
        this.name = name;       // String
        this.scores = scores;   // Array of Numbers
    }
// Method to calculate the average score
    getAverage() {
        let total = 0;

        // Loop  
        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i];
        }
        // return the average score
        return total / this.scores.length;
    }

    // Method to determine the letter grade using an if/else statement
    getLetterGrade() {
        // Call the internal getAverage method to get the current average
        let average = this.getAverage();
        
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else {
            return "F";
        }
    }

}

// RESTRUCTURE THE ANALYZER LOGIC

function analyzeClass(studentsArray) {
    console.log("------- Student Report -------");
    
    let classTotalAverageSum = 0;
    let highestAverage = -1;
    let topStudentName = "";

    // Loop through the list of student instances
    for (let i = 0; i < studentsArray.length; i++) {
        let currentStudent = studentsArray[i];
        let avg = currentStudent.getAverage();
        let letterGrade = currentStudent.getLetterGrade();

        // Format the average to 1 decimal place (.toFixed(1))
        let formattedAvg = avg.toFixed(1);

        // print the student's name, average score, and letter grade
        console.log(currentStudent.name + " - Average: " + formattedAvg + "| Grade: " + letterGrade);

        // Add the current student's average  to the running sum for the class average
        classTotalAverageSum += avg;

        // Conditional Comparison (>) to find the top-performing student
        if (avg > highestAverage) {
            highestAverage = avg;
            topStudentName = currentStudent.name;
        }
    }

    // Calculate the Total class average
    let classAverage = classTotalAverageSum / studentsArray.length;

    // Print the final summary block at the end of the run
    console.log("-------------------------------");
    console.log("Class Average: " + classAverage.toFixed(1));
    console.log("Top Student: " + topStudentName + " with "+ highestAverage.toFixed(1));
 }   
// TEST DATA

const studentData = [
    { name: "Lany", scores: [85,90,92] },
    { name: "Bongbung", scores: [70,75,68] },
    { name: "Dutherthe", scores: [95,98,92] },
    { name: "Pico", scores: [55,60,58] }
];

// Convert the test data into Student instances
const studentInstances = [];
for (let i = 0; i < studentData.length; i++) {
    studentInstances.push(new Student(studentData[i].name, studentData[i].scores));
}
analyzeClass(studentInstances);
