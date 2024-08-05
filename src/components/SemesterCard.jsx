import React from 'react'

const SemesterCard = ({ index, handleSgpaChange }) => {
  return (
    <div>
        <div className="form-group mt-2">
            <input
              type="number"
              className="form-control"
              id={`sgpa-${index}`}
              placeholder={`SGPA for Semester ${index + 1}`}
              onChange={(e) => handleSgpaChange(e, index)}
            />
          </div>
    </div>
  )
}
export default SemesterCard;
