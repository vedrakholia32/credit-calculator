import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SubjectList from './components/SubjectList';
import DropArea from './components/DropArea';

const App = () => {
  const [availableSubjects, setAvailableSubjects] = useState([
    { id: 1, name: 'Math', credits: 3 },
    { id: 2, name: 'Science', credits: 4 },
    { id: 3, name: 'History', credits: 2 },
  ]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const addSubject = (subject) => {
    setSelectedSubjects((prevSubjects) => [...prevSubjects, subject]);
    setAvailableSubjects((prevSubjects) => prevSubjects.filter((s) => s.id !== subject.id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <DropArea addSubject={addSubject} selectedSubjects={selectedSubjects} />
        <SubjectList subjects={availableSubjects} />
      </div>
    </DndProvider>
  );
};

export default App;
