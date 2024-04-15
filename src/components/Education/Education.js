import React from 'react';

const Education = ({ institution, degree, fieldOfStudy, year }) => {
  return (
    <div className="education">
      <h3 className='purple'>{institution}</h3>
      <p>
        {degree}, {fieldOfStudy}
      </p>
      <p>{year}</p>
    </div>
  );
};

export default Education;
