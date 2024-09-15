import React from 'react';
import { Link } from 'react-router-dom';

function ArcticFoxScreen() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Refir</h1>
      <img src="https://ntvskoli.s3.eu-west-2.amazonaws.com/refur1.jpg" alt="Refir" style={styles.image} />
      <p style={styles.description}>
        Refurinn er vel aðlagaður köldum umhverfum og er eini villti rándýrið á Íslandi. Þeir eru þekktir fyrir að vera
        mjög útsjónarsamir og hraustir.
      </p>
      <div style={styles.navigation}>
        <Link to="/" style={styles.navLink}>Heim</Link>
        <Link to="/animals/seal" style={styles.navLink}>Selir</Link>
        <Link to="/animals/dog" style={styles.navLink}>Hundar</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#e0f7fa',
    minHeight: '100vh',
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    color: '#00796b',
    fontSize: '48px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  image: {
    width: '80%',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '20px',
    color: '#616161',
    maxWidth: '800px',
    margin: '0 auto',
  },
  navigation: {
    marginTop: '30px',
  },
  navLink: {
    color: '#00796b',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '10px',
    borderRadius: '5px',
    border: '2px solid #00796b',
    transition: 'background-color 0.3s ease',
  },
};

export default ArcticFoxScreen;
