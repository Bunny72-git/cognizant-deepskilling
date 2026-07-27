import { useState } from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import { ThemeContext } from './context/ThemeContext';

const employees = [
  { id: 1, name: 'Alice Johnson', designation: 'Software Engineer', department: 'Engineering', salary: 95000 },
  { id: 2, name: 'Brian Smith', designation: 'Project Manager', department: 'Operations', salary: 110000 },
  { id: 3, name: 'Catherine Lee', designation: 'HR Specialist', department: 'Human Resources', salary: 78000 },
  { id: 4, name: 'Daniel Kim', designation: 'Sales Executive', department: 'Sales', salary: 87000 },
  { id: 5, name: 'Emily Davis', designation: 'Financial Analyst', department: 'Finance', salary: 90000 },
];

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme === 'dark' ? 'dark' : 'light'}`}>
        <header className="app-header">
          <h1>Employee Management App</h1>
          <button className={`theme-toggle ${theme === 'dark' ? 'dark-btn' : 'light-btn'}`} onClick={toggleTheme}>
            Toggle Theme
          </button>
        </header>
        <EmployeeList employees={employees} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
