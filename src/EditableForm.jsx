import React, { useState } from 'react';

const EditableForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
    };
    setSubmittedData(formData);
  };

  const handleEdit = () => {
    setSubmittedData(null);
    setName('');
    setEmail('');
  };

  return (
    <div>
      {!submittedData ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EditableForm;