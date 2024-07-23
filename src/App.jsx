import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SubjectList from './components/SubjectList';
import DropArea from './components/DropArea';
import AddSubjectForm from './components/AddSubjectForm';

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

  const addNewSubject = (subject) => {
    setAvailableSubjects((prevSubjects) => [...prevSubjects, subject]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '20px' }}>
        <DropArea addSubject={addSubject} selectedSubjects={selectedSubjects} />
        <div>
          <AddSubjectForm addNewSubject={addNewSubject} />
          <SubjectList subjects={availableSubjects} />
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
