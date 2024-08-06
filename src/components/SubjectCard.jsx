import React, { useState } from "react";

const SubjectCard = ({ index, updateGrade }) => {
    const [selectedGrade, setSelectGrade] = useState("Grade");
    const [credits, setCredits] = useState(0);

    const handleGradeChange = (grade) => {
        setSelectGrade(grade);
        updateGrade(index, grade, credits);
    };

    const handleCreditsChange = (e) => {
      const value = parseInt(e.target.value, 10) || 0;
      setCredits(value);
      updateGrade(index, selectedGrade, value);
      console.log(value);
    }

  return (
    <div className="d-flex mr-4">
      <div className="container">
        <div className="row">
          <div className="form-group col-9">
            <input
              type="number"
              className="form-control"
              id="total"
              placeholder={`Credits in Subject ${index + 1}`}
              onChange={handleCreditsChange}
            />
          </div>
          <div className="dropdown col-2">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              {selectedGrade}
            </button>
            <ul className="dropdown-menu">
              {["O", "A+", "A", "B+", "B", "C+", "C"].map((grade, gradeIndex) => (
                <li key={gradeIndex}>
                  <a className="dropdown-item" onClick={() => handleGradeChange(grade)}>
                    {grade}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
