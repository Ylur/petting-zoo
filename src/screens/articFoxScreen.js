import React from 'react';
import { Link } from 'react-router-dom';

function ArticFoxScreen() {
  return (
    <div style={{ backgroundColor: '#e0f2f1', minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
      <h1 style={{ color: '#004d40' }}>Arctic Fox</h1>
      <img
        src="https://ntvskoli.s3.eu-west-2.amazonaws.com/refur1.jpg"
        alt="Arctic Fox"
        style={{ width: '300px', height: '300px', borderRadius: '10px' }}
      />
      <p style={{ color: '#004d40', marginTop: '20px' }}>
        The arctic fox is well adapted to living in cold environments. They have thick fur and can survive in sub-zero temperatures.
      </p>
      <Link to="/" style={{ color: '#004d40', textDecoration: 'underline' }}>Back to Home</Link>
    </div>
  );
}

export default ArticFoxScreen;
