import React from 'react';
import Subject from './Subject';

const SubjectList = ({ subjects }) => {
  return (
    <div className="subject-list">
      <h3>Available Subjects</h3>
      {subjects.map((subject) => (
        <div key={subject.id}>
          <Subject subject={subject} />
        </div>
      ))}
    </div>
  );
};

export default SubjectList;
