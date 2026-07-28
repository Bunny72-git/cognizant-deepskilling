import { useState } from 'react';

const ComplaintRegister = () => {
  // Controlled component state for form inputs
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');

  // Create a random reference number for each successful submission
  const generateReferenceNumber = () => {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    return `REF${randomNumber}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent full-page refresh

    // Validate both fields before submitting
    if (!employeeName.trim() || !complaint.trim()) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    const referenceNumber = generateReferenceNumber();

    alert(
      `Complaint Raised Successfully!\n\nEmployee Name: ${employeeName.trim()}\nReference Number:\n${referenceNumber}`
    );

    // Clear form after successful submission
    setEmployeeName('');
    setComplaint('');
  };

  return (
    <div className="form-wrapper">
      <div className="card">
        <h1>Raise Your Complaint</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="employeeName">Employee Name</label>
          <input
            id="employeeName"
            type="text"
            value={employeeName}
            onChange={(event) => setEmployeeName(event.target.value)}
            placeholder="Enter employee name"
          />

          <label htmlFor="complaint">Complaint</label>
          <textarea
            id="complaint"
            rows="6"
            value={complaint}
            onChange={(event) => setComplaint(event.target.value)}
            placeholder="Describe your complaint"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ComplaintRegister;
