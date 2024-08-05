import React, { useState } from "react";
import SubjectCard from "./SubjectCard";

const gradePoints = {
  "O": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6,
  "C+": 5,
  "C": 4,
}

const Subjects = () => {
  const [subjects, setSubjects] = useState(0);
  const [grades, setGrades] = useState([]);
  const [calculatedSGPA, setCalculatedSGPA] = useState(null);

  const handleChange = (e) => {
    let value = parseInt(e.target.value, 10) || 0;
    value = value < 0 ? 0 : value;
    setSubjects(value);
    setGrades(Array(value).fill({ grade: "Grade", credits: 0 }));
    setCalculatedSGPA(null);
  };

  const updateGrade = (index, grade, credits) => {
    const newGrades = [...grades];
    newGrades[index] = { grade, credits };
    setGrades(newGrades); 
  };

  const calculateSGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    grades.forEach(({ grade, credits }) => {
      if (grade !== "Grade" && credits > 0) {
        totalCredits += credits;
        totalPoints += credits * gradePoints[grade];
      }
    });
    const gpa =  totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
    setCalculatedSGPA(gpa);
  }

  let subjectArray;
  if (subjects < 0){
    subjectArray = [];
  }
  else {
    subjectArray = [...Array(subjects)];
  }
  return (
    <>
      <div>
        <div className="container mt-5 mb-5">
          <div className="d-flex justify-content-center ">
            <div className="row">
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  id="total"
                  placeholder="Number of subjects"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            {subjectArray.map((_, index) => (
              <SubjectCard key={index} index={index} updateGrade={updateGrade} />
            ))}
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center flex-column mt-5">
          <div className="row">
            <div className="col-3" />
        <button className="btn btn-primary col-6 mb-3" onClick={calculateSGPA}>Calculate SGPA</button>
          </div>

        {subjectArray.length > 0 ? (
          <div className="container d-flex justify-content-center mb-5">
            <h1>Your GPA: {calculatedSGPA}</h1>
          </div>
        ) : (
          <div className="container d-flex justify-content-center">
            <h2>Select number of subjects!</h2>
          </div>
        )}
      </div>
    </>
  );
};
export default Subjects;
