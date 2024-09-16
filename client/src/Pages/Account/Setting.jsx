import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Setting = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    oldPassword: '',
    newPassword: '',
    message: '',
    error: '',
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setFormState((prevState) => ({
        ...prevState,
        name: user.name || '',
        email: user.email || ''
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    // const token = localStorage.getItem('token');
    // console.log('Token used in request:', token);
    event.preventDefault();

    axios.post('http://localhost:8000/api/update-password', {
      old_password: formState.oldPassword,
      name: formState.name,
      email: formState.email,
      new_password: formState.newPassword
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        setFormState((prevState) => ({
          ...prevState,
          message: 'Password updated successfully.',
          error: ''
        }));
      })
      .catch(error => {
        setFormState((prevState) => ({
          ...prevState,
          error: error.response?.data?.message || 'An error occurred.',
          message: ''
        }));
      });
  };

  return (
    <div className="container">
      <form className="mt-4" onSubmit={handleSubmit}>
        {formState.message && <div className="alert alert-success">{formState.message}</div>}
        {formState.error && <div className="alert alert-danger">{formState.error}</div>}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="oldPassword">Old Password:</label>
          <input
            type="password"
            className="form-control"
            id="oldPassword"
            name="oldPassword"
            value={formState.oldPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            name="newPassword"
            value={formState.newPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Setting;
