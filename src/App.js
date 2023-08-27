import React, { useState } from 'react';
import "./App.css"

const EditableForm = ({ addData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [problem, setProblem] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleProblemChange = (event) => {
    setProblem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      problem,
      timestamp: new Date().toLocaleString()
    };
    addData(formData);
    setName('');
    setEmail('');
    setProblem('');
  };

  return (
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
      <div>
        <label htmlFor="problem">Problem:</label>
        <textarea className = "textarea-custom"
          type="text"
          id="problem"
          value={problem}
          onChange={handleProblemChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const EditableList = ({ dataList, editData }) => {
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleSave = (index) => {
    setEditingIndex(-1);
    editData(index);
  };

  return (
    <ul>
      {dataList.map((data, index) => (
        <li key={index}>
          {editingIndex === index ? (
            <div>
              <input
                type="text"
                value={data.name}
                onChange={(event) => editData(event.target.value, index, 'name')}
              />
              <input
                type="text"
                value={data.email}
                onChange={(event) => editData(event.target.value, index, 'email')}
              />
              <input
                type="text"
                value={data.problem}
                onChange={(event) => editData(event.target.value, index, 'problem')}
              />
              <button onClick={() => handleSave(index)}>Save</button>
            </div>
          ) : (
            <div>
              <p>Name: {data.name}</p>
              <p>Email: {data.email}</p>
              <p>Problem: {data.problem}</p>
              <p>Timestamp: {data.timestamp}</p>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const [dataList, setDataList] = useState([]);

  const addData = (data) => {
    setDataList([...dataList, data]);
  };

  const editData = (value, index, field) => {
    const updatedDataList = [...dataList];
    updatedDataList[index][field] = value;
    setDataList(updatedDataList);
  };

  return (
    <div>
      <EditableForm addData={addData} />
      <EditableList dataList={dataList} editData={editData} />
    </div>
  );
};

export default App;
