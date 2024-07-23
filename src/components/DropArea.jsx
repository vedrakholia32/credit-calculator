import React from 'react';
import { useDrop } from 'react-dnd';

const DropArea = ({ addSubject, selectedSubjects }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'SUBJECT',
    drop: (item) => addSubject(item.subject),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const totalCredits = selectedSubjects.reduce((total, subject) => total + subject.credits, 0);

  return (
    <div ref={drop} className="drop-area">
      <h3>Your Selected Subjects</h3>
      {isOver ? 'Release to drop' : 'Drag a subject here'}
      <ul>
        {selectedSubjects.map((subject, index) => (
          <li key={index}>
            {subject.name} ({subject.credits} credits)
          </li>
        ))}
      </ul>
      <h4>Total Credits: {totalCredits}</h4>
    </div>
  );
};

export default DropArea;
