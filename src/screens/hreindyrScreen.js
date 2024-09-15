import React from 'react';
import { Link } from 'react-router-dom';

function HreindyrScreen() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hreindýr</h1>
      <img src="https://ntvskoli.s3.eu-west-2.amazonaws.com/hreindyr1.jpg" alt="Hreindyr" style={styles.image} />
      <p style={styles.description}>
        Hreindýr eru stór dýr með horn, þekkt fyrir þátttöku í jólasögum og eru einnig algeng á Austfjörðum.
      </p>
      <div style={styles.navigation}>
        <Link to="/" style={styles.navLink}>Heim</Link>
        <Link to="/animals/horse" style={styles.navLink}>Hestar</Link>
        <Link to="/animals/seal" style={styles.navLink}>Selir</Link>
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

export default HreindyrScreen;
