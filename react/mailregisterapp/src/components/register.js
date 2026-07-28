import React, { useState } from 'react';

function Register() {
  // Controlled component state for user inputs
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  // Validation messages for each field
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  // Tracks whether the form has been successfully submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validates a single field using the current input value
  const validateField = (name, value) => {
    if (name === 'fullName') {
      if (!value.trim()) return 'Full name is required.';
      if (value.trim().length < 5) return 'Name must be at least 5 characters.';
      return '';
    }

    if (name === 'email') {
      if (!value.trim()) return 'Email is required.';
      if (!value.includes('@') || !value.includes('.')) return 'Invalid Email Address';
      return '';
    }

    if (name === 'password') {
      if (!value.trim()) return 'Password is required.';
      if (value.length < 8) return 'Password must be at least 8 characters.';
      return '';
    }

    return '';
  };

  // Checks the whole form and returns an object of validation messages
  const validateForm = () => {
    const nextErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      password: validateField('password', formData.password)
    };

    return nextErrors;
  };

  // Handles value changes and validates on every keystroke
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  // Handles the form submission and shows the success alert
  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    const hasErrors = Object.values(nextErrors).some((message) => message !== '');

    if (hasErrors) {
      setIsSubmitted(false);
      return;
    }

    // Prevents page refresh and shows the alert
    alert(`Registration Successful!\n\nName: ${formData.fullName}\nEmail: ${formData.email}`);

    setFormData({ fullName: '', email: '', password: '' });
    setErrors({ fullName: '', email: '', password: '' });
    setIsSubmitted(true);
  };

  return (
    <div className="form-wrapper">
      <div className={`register-card ${isSubmitted ? 'success-highlight' : ''}`}>
        <h1>Create Your Account</h1>
        <p className="subtitle">Register with a polished and secure form experience.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={errors.fullName ? 'input-error' : ''}
            />
            {errors.fullName && <span className="error-text">{errors.fullName}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
