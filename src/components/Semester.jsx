import React, { useState } from "react";
import SemesterCard from "./SemesterCard";

const Semester = () => {
  const [semester, setSemester] = useState(0);
  const [calculatedCGPA, setCalculatedCGPA] = useState(null);
  const [sgpa, setSgpa] = useState([]);

  const handleChange = (e) => {
    let value = parseInt(e.target.value, 10) || 0;
    value = value < 0 ? 0 : value;
    setSemester(value);

    if (value > sgpa.length) {
      setSgpa([...sgpa, ...new Array(value - sgpa.length).fill(0)]);
    } else {
      setSgpa(sgpa.slice(0, value));
    }
  };

  const handleSgpaChange = (e, index) => {
    const value = parseFloat(e.target.value) || 0;
    setSgpa((prevSgpa) => {
      const newSgpa = [...prevSgpa];
      newSgpa[index] = value;
      return newSgpa;
    });
  };

  const calculateCGPA = () => {
    if (sgpa.length === 0) {
      setCalculatedCGPA(0);
      return;
    }
    const validSgpa = sgpa.filter((value) => value !== 0);
    const sum = validSgpa.reduce((acc, val) => acc + val, 0);
    const cgpa = sum / validSgpa.length;
    setCalculatedCGPA(cgpa.toFixed(2));
  };

  let semesterArray = semester < 0 ? [] : [...Array(semester)];

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center ">
          <div className="row">
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="total"
                placeholder="Number of semesters"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column">
          {semesterArray.map((_, index) => (
            <SemesterCard key={index} index={index} handleSgpaChange={handleSgpaChange} />
          ))}
        </div>
      </div>
      <div className="container d-flex justify-content-center flex-column mt-5">
        <div className="row">
          <div className="col-3" />
          <button className="btn btn-primary col-6 mb-3" onClick={calculateCGPA}>Calculate CGPA</button>
        </div>

        {semesterArray.length > 0 ? (
          <div className="container d-flex justify-content-center mb-5">
            <h1>Your GPA: {calculatedCGPA}</h1>
          </div>
        ) : (
          <div className="container d-flex justify-content-center">
            <h2>Select number of semester!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Semester;
