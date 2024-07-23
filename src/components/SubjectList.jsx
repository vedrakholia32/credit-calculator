import React from 'react';
import Subject from './Subject';

const SubjectList = ({ subjects }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <h3>Available Subjects</h3>
      {subjects.map((subject) => (
        <Subject key={subject.id} subject={subject} />
      ))}
    </div>
  );
};

export default SubjectList;
