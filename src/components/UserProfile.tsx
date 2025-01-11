import React, { useState } from 'react';
import "../App.css";


function UserProfile() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    const handleNameOnChange = (event) => {
        setName(event.target.value);
    }

    const handleAgeOnChange = (event) => {
        setAge(event.target.value);
    }

    const resetProfile = () => {
        setName("");
        setAge(0);
    }

  return (
    <div className="px-5">
      <h1>User Profile</h1>
      
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={handleNameOnChange} 
          placeholder="Enter your name"
        />
      </div>
      
      <div>
        <label>Age:</label>
        <input 
          type="number" 
          value={age} 
          onChange={handleAgeOnChange} 
          placeholder="Enter your age"
        />
      </div>

      <div>
        <p>Profile: My name is {name}, and I am {age} years old.</p>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>

      <div>
        <button onClick={resetProfile}>Reset Profile</button>
      </div>
    </div>
  );
};

export default UserProfile;