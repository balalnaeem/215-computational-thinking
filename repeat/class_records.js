/*
exams : 65%
exercises : 35%

- each term has 4 exams
- several exercises

- every exam max score = 100
- exercises have varied max score and values
  - total maximum point value for exercises is always 100
    - for example one term may have 5 exrecises [30,20,10,20,20]
    - and another term may have only 3 exercises [20,30,50]
    - total of all exercises is always 100

- to determine a student's grade
  1. we determine a students average score from 4 exams
  2. then sum all the exercises score
  3. then weights are applied to compute a student's final percent grade
  4. finally we determine the letter equivalent grade from percent grade

example:
- student got [20, 15, 40] on exercises
- student got [90 80 95 71] on exams

- average exam score (90+80+95+71) / 4 = 84
- compute total exercise score (20+15+40) = 75
- apply weights 84 * .65 + 75 * .35 = 80.81
- round the percent grade = 81
- get the grade = C
- combine the percent grade and letter grade '81 (C)'

in: object
out: object {
  studentGrads: array
  exams: object
}

Rules:
- for exams object
  - we calculate the ave that was scored in that exam across all students
  - we calculate the min that was scored in that exam across all students
  - we calculate the max that was scored in that exam across all students

Al:
- first we will try and build the studentGrades array
  - initialize an empty object with two keys
    { studentGrades: [], exams: [] }
  - iterate over the keys of the object with Object.keys(obj)
    - on each iteration
      - average exame score
      - total exercise score
      - apply weights and get the final percent
      - get the grade
      - combine the percent and grade and insert that into our object
      - result.Obj.studentGrades.push(combination)

- then we will caculate the exams
- intialze an empty array average across all exams
- Iterate over the keys with Object.keys(obj)
  - on each iteration get the exams score
    - insert the first score into exam one
    - second score into exam two
    - third score into exame three
    - fourth score into exam four
put them all into an array
  - now iterating over the array
  - we find the min and max and ave
  - and insert them into the our final object exams array as an object

reutrn that object
*/

let sum = (acc, val) => acc + val;
let min = (previous, current) => current < previous ? current : previous;
let max = (previous, current) => current > previous ? current : previous;
let ave = array => array.reduce(sum) / array.length;

function examsAverage(student, obj) {
  let total = obj[student].scores.exams.reduce(sum);
  let length = obj[student].scores.exams.length;
  let average = total / length;
  return Math.round(average);
}

function exercisesTotal(student, obj) {
  return obj[student].scores.exercises.reduce(sum);
}

function getFinalPercent(exams, exercises) {
  let examsFinal = exams * .65;
  let exercisesFinal = exercises * .35;
  return Math.round(examsFinal + exercisesFinal);
}

function getGrade(percent) {
  if (percent >= 93) {
    return 'A';
  } else if (percent >= 85) {
    return 'B';
  } else if (percent >= 77) {
    return 'C';
  } else if (percent >= 69) {
    return 'D';
  } else if (percent >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function generateClassRecordSummary(scores) {
  let examScore;
  let exerciseScore;
  let finalPercent;
  let finalGrade;
  let finalresult;

  let allExamsScores = [[], [], [], []];
  let currentScore;

  let resultObj = {
    studentGrades: [],
    exams: [],
  };

  Object.keys(scores).forEach(student => {
    examScore = examsAverage(student, scores);
    exerciseScore = exercisesTotal(student, scores);
    finalPercent = getFinalPercent(examScore, exerciseScore);
    finalGrade = getGrade(finalPercent);
    finalresult = `${finalPercent} (${finalGrade})`;
    resultObj.studentGrades.push(finalresult);
  });

  Object.keys(scores).forEach((student) => {
    for(let i = 0; i < 4; i += 1) {
      currentScore = scores[student].scores.exams[i];
      allExamsScores[i].push(currentScore);
    }
  });

  resultObj.exams = allExamsScores.map(arr => {
    return {
      average: ave(arr).toFixed(1),
      minimum: arr.reduce(min),
      maximum: arr.reduce(max),
    }
  });

  return resultObj;
}



let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};


console.log(generateClassRecordSummary(studentScores));