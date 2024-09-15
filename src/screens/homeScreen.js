import React from 'react';
import { Link } from 'react-router-dom';

function homeScreen() {
  return (
    <div style={{ backgroundColor: '#e0f7fa', minHeight: '100vh', textAlign: 'center', padding: '50px' }}>
      <h1 style={{ color: '#00796b' }}>Velkomin á dýrasölu NTV skólans</h1>
      <p style={{ color: '#00796b' }}>Hér fyrir neðan geturu fræðst nánar um dýrin:</p>

      <div>
        <h2>1. Hreindýr</h2>
        <p>Hreindýr eru eingöngu á austfjörðum þótt það var reynt að hafa þau fyrir vestan einnig.</p>
        <Link to="/animals/hreindyr" style={{ color: '#004d40', textDecoration: 'underline' }}>Fræðast meira um Hreindýr</Link>
      </div>

      <div>
        <h2>2. Hundar</h2>
        <p>Dogs are domesticated mammals, known for their loyalty and companionship.</p>
        <Link to="/animals/dog" style={{ color: '#004d40', textDecoration: 'underline' }}>Fræðast meira um hunda</Link>
      </div>

      <div>
        <h2>3. Ernir</h2>
        <p>Eagles are large birds of prey with excellent eyesight.</p>
        <Link to="/animals/eagle" style={{ color: '#004d40', textDecoration: 'underline' }}>Fræðast meira um Erni</Link>
      </div>

      <div>
        <h2>4. Smitter!</h2>
        <p>Velkominn í NTV teach!</p>
        <Link to="/match" style={{ color: '#004d40', textDecoration: 'underline' }}>Click le moi</Link>
      </div>
    </div>
  );
}

export default homeScreen;
