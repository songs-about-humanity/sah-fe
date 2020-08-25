import React, { useState } from 'react';
import { signup } from '../../services/users';
import { useDispatch } from 'react-redux';

export default function SignUpForm({ passId }) {
  const [username, setUserName] = useState('');
  const [pin, setPIN] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if(target.name === 'username') setUserName(target.value);
    if(target.name === 'pin') setPIN(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup({ username, pin })
      .then(user => dispatch({ type: 'SET_ID', payload: user._id }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="User Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="pin"
        placeholder="PIN"
        onChange={handleChange}
      />
      <button>Sign Up</button>
    </form>
  );
}
