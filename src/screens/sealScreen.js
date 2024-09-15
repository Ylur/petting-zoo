import React from 'react';
import { Link } from 'react-router-dom';

function SealScreen() {
  return (
    <div style={{ backgroundColor: '#e3f2fd', minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
      <h1 style={{ color: '#1976d2' }}>Seal</h1>
      <img
        src="https://ntvskoli.s3.eu-west-2.amazonaws.com/selur1.jpg"
        alt="Seal"
        style={{ width: '300px', height: '300px', borderRadius: '10px' }}
      />
      <p style={{ color: '#1976d2', marginTop: '20px' }}>
        Seals are semi-aquatic marine mammals known for their playful nature and sleek bodies.
      </p>
      <Link to="/" style={{ color: '#1976d2', textDecoration: 'underline' }}>Back to Home</Link>
    </div>
  );
}

export default SealScreen;
