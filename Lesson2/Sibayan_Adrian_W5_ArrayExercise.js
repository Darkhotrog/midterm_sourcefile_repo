'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

// Store the original names and final scores.
const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

// Store three activity scores for each original student.
const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

// Preserve the original names for the activity matrix.
const originalNames = Array.from(studentNames);


console.log('\nPART A: ORIGINAL RECORDS');

// Use a for loop to display every name and score using the length property.
for (let i = 0; i < studentNames.length; i++) {
  console.log(i + ' - ' + studentNames[i] + ': ' + studentScores[i]);
}


console.log('\nPART B: ADD NEW STUDENTS');

// 1. Add Faith and 88 at the end.
studentNames.push('Faith');
studentScores.push(88);

// 2. Add Aaron and 76 at the beginning.
studentNames.unshift('Aaron');
studentScores.unshift(76);

// 3 & 4. Display the updated names, scores, and total count.
console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);


console.log('\nPART C: REMOVE AND REPLACE RECORDS');

// 1. Remove the first student and score (Aaron).
studentNames.shift();
studentScores.shift();

// 2. Remove the last student and score (Faith).
studentNames.pop();
studentScores.pop();

// 3. Find Daniel's index.
const danielIndex = studentNames.indexOf('Daniel');

// 4. Remove Daniel and Daniel's score using splice.
if (danielIndex !== -1) {
  studentNames.splice(danielIndex, 1);
  studentScores.splice(danielIndex, 1);
}

// 5. Insert Grace and 82 at index 2 using splice.
studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

// 6. Display the resulting arrays.
console.log('Names:', studentNames);
console.log('Scores:', studentScores);


console.log('\nPART D: CLASS STATISTICS');

// 1. Calculate the total score.
const totalScore = studentScores.reduce((sum, score) => sum + score, 0);

// 2. Calculate the average score.
const averageScore = totalScore / studentScores.length;

// 3 & 4. Find highest and lowest scores.
let highestScore = studentScores[0];
let lowestScore = studentScores[0];

for (let i = 1; i < studentScores.length; i++) {
  if (studentScores[i] > highestScore) {
    highestScore = studentScores[i];
  }
  if (studentScores[i] < lowestScore) {
    lowestScore = studentScores[i];
  }
}

// Display all statistics using string concatenation (+).
console.log('Total Score: ' + totalScore);
console.log('Average Score: ' + averageScore.toFixed(2));
console.log('Highest Score: ' + highestScore);
console.log('Lowest Score: ' + lowestScore);


console.log('\nPART E: PASSING-SCORE ANALYSIS');

const passingScore = 75;

// 1. Filter passing scores.
const passingScores = studentScores.filter(score => score >= passingScore);

// 2. Map scores to 'Passed' or 'Failed'.
const statuses = studentScores.map(score => score >= passingScore ? 'Passed' : 'Failed');

// 3. Check if at least one student failed.
const hasFailedStudent = studentScores.some(score => score < passingScore);

// 4. Check if all students passed.
const allPassed = studentScores.every(score => score >= passingScore);

// Display results.
console.log('Passing Scores:', passingScores);
console.log('Statuses:', statuses);
console.log('At Least One Failed: ' + hasFailedStudent);
console.log('All Students Passed: ' + allPassed);


console.log('\nPART F: SORT AND SEARCH');

// 1. Copy the studentScores array using Array.from.
const scoresCopy = Array.from(studentScores);

// 2. Sort from highest to lowest using a numeric comparison function.
scoresCopy.sort((a, b) => b - a);

// 3. Display sorted copy.
console.log('Scores from Highest to Lowest:', scoresCopy);

// 4 & 5. Search for score 91 using includes and indexOf on studentScores.
const contains91 = studentScores.includes(91);
const indexOf91 = studentScores.indexOf(91);

console.log('Contains 91: ' + contains91);
console.log('Index of 91: ' + indexOf91);


console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverages = [];

// Use nested loops to process rows and columns.
for (let i = 0; i < activityScores.length; i++) {
  let rowSum = 0;
  
  for (let j = 0; j < activityScores[i].length; j++) {
    rowSum += activityScores[i][j];
  }
  
  const rowAverage = rowSum / activityScores[i].length;
  activityAverages.push(rowAverage);
  
  console.log(originalNames[i] + "'s activity average: " + rowAverage.toFixed(2));
}

console.log('Activity Averages:', activityAverages);


console.log('\nPART H: TEXT SUMMARY');

// Use join to display current student names separated by " | ".
console.log('Students: ' + studentNames.join(' | '));
console.kh