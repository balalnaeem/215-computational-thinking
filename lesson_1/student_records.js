/*
In: Object
Out: Object

Rules:
- givent object has student numbers as keys
- and objects as values as keys
  - in those objects we have id and scores as keys
  - scores is another object that has exam scores and exercises scores

*/
const EXAMS_WEIGHT = .65;
const EXERCISES_WEIGHT = .35;
let sum = (acc, val) => acc + val;
let averageScore = scores => scores.reduce(sum) / scores.length;
let max = (acc, val) => acc = val > acc ? val : acc;
let min = (acc, val) => acc = val < acc ? val : acc;
let getGrade = score => {
  if (score >= 93) {
    return 'A';
  } else if (score >= 85) {
    return 'B';
  } else if (score >= 77) {
    return 'C';
  } else if (score >= 69) {
    return 'D';
  } else if (score >= 60) {
    return 'E';
  } else {
    return 'F'
  }
}

let getStudentGrades = obj => {
  let examScores;
  let exercisesScores;
  let averageExamTotals;
  let exercisesTotal;
  let finalScores;

  examScores = Object.keys(obj).map(student =>{
    return obj[student].scores.exams;
  });

  exercisesScores = Object.keys(obj).map(student => {
    return obj[student].scores.exercises;
  });

  averageExamTotals = examScores.map(arr => {
    return averageScore(arr);
  });

  exercisesTotal = exercisesScores.map(arr => {
    return arr.reduce(sum);
  });

  finalScores = averageExamTotals.map((examsTotal, index) => {
    return Math.round(examsTotal * EXAMS_WEIGHT + exercisesTotal[index] * EXERCISES_WEIGHT);
  });

  return finalScores.map(score => {
    return String(score) + ' (' + getGrade(score) + ')';
  });
}

let getExamsMinMaxAve = obj => {
  let examsArr = []
  let tempArr;
  let totalExams = Object.keys(obj).length;
  let length = totalExams;
  let i;

  for (i = 0; i < length; i += 1) {
    tempArr = [];
    for (i = 0; i < length - 1; i += 1) {
      tempArr.push(obj[Object.keys(obj)[i]].scores.exams[i])
    }
    examsArr.push(tempArr);
  }

  return examsArr;
}

function generateClassRecordSummary(scores) {
  return {
    studentGrades: getStudentGrades(scores),
    exams: getExamsMinMaxAve(scores),
  };
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
