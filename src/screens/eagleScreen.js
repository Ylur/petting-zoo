import React from 'react';
import { Link } from 'react-router-dom';

function EagleScreen() {
  return (
    <div style={{ backgroundColor: '#fffde7', minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
      <h1 style={{ color: '#fbc02d' }}>Eagle</h1>
      <img
        src="https://ntvskoli.s3.eu-west-2.amazonaws.com/fugl1.jpg"
        alt="Eagle"
        style={{ width: '300px', height: '300px', borderRadius: '10px' }}
      />
      <p style={{ color: '#fbc02d', marginTop: '20px' }}>
        Eagles are large birds of prey with powerful beaks and talons. They are known for their excellent eyesight.
      </p>
      <Link to="/" style={{ color: '#fbc02d', textDecoration: 'underline' }}>Back to Home</Link>
    </div>
  );
}

export default EagleScreen;
