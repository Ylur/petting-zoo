import React from 'react';
import { Link } from 'react-router-dom';

function HorseScreen() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hestar</h1> 
      <img src="https://ntvskoli.s3.eu-west-2.amazonaws.com/hestur1.jpg" alt="Hestur" style={styles.image} />
      <p style={styles.description}>
        Hestar eru stór dýr sem eru notuð til reiðar og flutninga. Þeir eru einnig mikilvægir félagar manna í mörgum menningarheimum.
      </p>
      <div style={styles.navigation}>
        <Link to="/" style={styles.navLink}>Heim</Link>
        <Link to="/animals/dog" style={styles.navLink}>Hundar</Link>
        <Link to="/animals/hreindyr" style={styles.navLink}>Hreindýr</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f5f5f5',
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

export default HorseScreen;
