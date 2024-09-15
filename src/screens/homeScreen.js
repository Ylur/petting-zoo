import React from 'react';
import { Link } from 'react-router-dom';

function homeScreen() {
  return (
    <div style={{ backgroundColor: '#e0f7fa', minHeight: '100vh', textAlign: 'center', padding: '50px' }}>
      <h1 style={{ color: '#00796b' }}>Welcome to the Animal Information Page</h1>
      <p style={{ color: '#00796b' }}>Learn more about different animals by clicking on the links below:</p>

      <div>
        <h2>1. Cats</h2>
        <p>Cats are small, carnivorous mammals that are often kept as pets.</p>
        <Link to="/animals/cat" style={{ color: '#004d40', textDecoration: 'underline' }}>Learn more about Cats</Link>
      </div>

      <div>
        <h2>2. Dogs</h2>
        <p>Dogs are domesticated mammals, known for their loyalty and companionship.</p>
        <Link to="/animals/dog" style={{ color: '#004d40', textDecoration: 'underline' }}>Learn more about Dogs</Link>
      </div>

      <div>
        <h2>3. Eagles</h2>
        <p>Eagles are large birds of prey with excellent eyesight.</p>
        <Link to="/animals/eagle" style={{ color: '#004d40', textDecoration: 'underline' }}>Learn more about Eagles</Link>
      </div>

      <div>
        <h2>4. Have Fun!</h2>
        <p>Play a fun matching game with the animals!</p>
        <Link to="/match" style={{ color: '#004d40', textDecoration: 'underline' }}>Go to Animal Match</Link>
      </div>
    </div>
  );
}

export default homeScreen;
