// src/components/Body.js

import React from 'react';
import '../components/Styles/Body.css';

const Body = () => {
    return (
      <div className="body">
        <h1 className="page-title">Land Manager</h1>
        <div className="card">
          <button className="card-button">Add Asset</button>
        </div>
        <div className="card">
          <button className="card-button">Add Project</button>
        </div>
        <div className="card">
          <button className="card-button">View Notifications</button>
        </div>
      </div>
    );
  }
  

export default Body;
