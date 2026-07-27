import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  const isDark = theme === 'dark';

  return (
    <div className={`employee-card ${isDark ? 'dark' : 'light'}`}>
      <h3>{employee.name}</h3>
      <p>
        <strong>Designation:</strong> {employee.designation}
      </p>
      <p>
        <strong>Department:</strong> {employee.department}
      </p>
      <p>
        <strong>Salary:</strong> ${employee.salary.toLocaleString()}
      </p>
      <div className="card-actions">
        <button className={`action-btn ${isDark ? 'dark-btn' : 'light-btn'}`}>View</button>
        <button className={`action-btn ${isDark ? 'dark-btn' : 'light-btn'}`}>Edit</button>
        <button className={`action-btn ${isDark ? 'dark-btn' : 'light-btn'}`}>Delete</button>
      </div>
    </div>
  );
}

export default EmployeeCard;
