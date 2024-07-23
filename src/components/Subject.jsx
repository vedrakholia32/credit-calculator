import React from 'react';
import { useDrag } from 'react-dnd';

const Subject = ({ subject }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'SUBJECT',
    item: { subject },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, padding: '5px', border: '1px solid gray', margin: '5px' }}>
      <p>{subject.name} ({subject.credits} credits)</p>
    </div>
  );
};

export default Subject;
