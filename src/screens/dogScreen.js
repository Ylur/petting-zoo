import React from 'react';

function DogScreen() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hundar</h1>
      <img src="https://ntvskoli.s3.eu-west-2.amazonaws.com/hundur1.jpg" alt="Hundur" style={styles.image} />
      <p style={styles.description}>
        Hundar eru húsdýr, þekktir fyrir trygglyndi og félagsskap. Þeir eru ein elsta tegund húsdýra og hafa verið félagar
        manna um aldir.
      </p>
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
};

export default DogScreen;
