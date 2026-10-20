//Activity

//All of Student
const scores =[85,72,91,64,78];

let totalScore = 0;
let highestScore = scores[0];
let lowestScore = scores[0];
let passedCount = 0;
let failedCount = 0;
let studentDetails = "";

// Helper function to get remarks status
function getRemarks(score) {
    if (score >= 90) {
        return "Excellent - Passed";
    }else if (score >= 80) {
        return "Very Good - Passed";
    }else if (score >= 75) {
        return "Good - Passed";
    }else {
        return "Failed";
    }
}

//Processing each student score
scores.forEach((score, index) => {
    //1. Accumulate total score
    totalScore += score;

    //2. Track Highest and Lowest scores
    if (score > highestScore) highestScore = score;
    if (score < lowestScore) lowestScore = score;

    //3. Determine status and increment counters
    const remarks = getRemarks(score);
    if (remarks.includes("Passed")) {
        passedCount++;
    }else {
        failedCount++;
    }
    //4. Format Individual Student output Line
    studentDetails  += ("Student "+(index + 1)+ ": " + score + " - " + remarks + "\n");

})

//Calculate average score
const averageScore = totalScore / scores.length;

//Displaying the Final output
console.log("Student Scores:");
scores.forEach(score => console.log(score));
console.log(""); //para may space
console.log(studentDetails);
console.log("");
console.log("Total Score :" + totalScore);
console.log("Average Score: " + averageScore);
console.log("Highest Score: " + highestScore);
console.log("Lowest Score: " + lowestScore);
console.log("Passed: " + passedCount);
console.log("Failed: " + failedCount);
console.log("")
console.log("YUN LANG PO")