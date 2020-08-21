import React, { useState } from 'react';

export default function LogInForm() {
  const [username, setUserName] = useState('');
  const [pin, setPIN] = useState('');

  const handleChange = ({ target }) => {
    if(target.name === 'username') setUserName(target.value);
    if(target.name === 'pin') setPIN(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, pin);
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
      <button>Login</button>
    </form>
  );
}

