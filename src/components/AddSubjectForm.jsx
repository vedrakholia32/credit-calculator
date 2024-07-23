import React, { useState } from 'react';

const AddSubjectForm = ({ addNewSubject }) => {
  const [name, setName] = useState('');
  const [credits, setCredits] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const creditsValue = parseInt(credits);

    if (!name) {
      setError('Subject name is required.');
      return;
    }

    if (isNaN(creditsValue) || creditsValue <= 0) {
      setError('Credits must be a positive number.');
      return;
    }

    addNewSubject({ id: Date.now(), name, credits: creditsValue });
    setName('');
    setCredits('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-subject-form">
      <div>
        <label>
          Subject Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Credits:
          <input
            type="number"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
            required
            min="1" // Ensure that the value is at least 1
          />
        </label>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Add Subject</button>
    </form>
  );
};

export default AddSubjectForm;
