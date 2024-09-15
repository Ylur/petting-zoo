import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Velkomin á dýrasölu NTV skólans</h1>
      <p style={styles.introText}>Hér fyrir neðan geturu fræðst nánar um dýrin:</p>

      <div style={styles.cardContainer}>
        {animals.map((animal, idx) => (
          <div key={idx} style={styles.card}>
            <img src={animal.imageUrl} alt={animal.name} style={styles.image} />
            <h2 style={styles.animalName}>{animal.name}</h2>
            <p style={styles.animalDescription}>{animal.description}</p>
            <Link to={animal.link} style={styles.link}>
              Fræðast meira um {animal.name}
            </Link>
          </div>
        ))}
      </div>

      <div style={styles.matchContainer}>
        <h2 style={styles.matchTitle}>Smitter!</h2>
        <p style={styles.matchDescription}>Velkominn í NTV teach!</p>
        <Link to="/match" style={styles.matchLink}>
          Click le moi
        </Link>
      </div>
    </div>
  );
}

const animals = [
  {
    name: 'Hreindýr',
    description: 'Hreindýr eru eingöngu á austfjörðum þótt það var reynt að hafa þau fyrir vestan einnig.',
    imageUrl: 'https://ntvskoli.s3.eu-west-2.amazonaws.com/hreindyr1.jpg',
    link: '/animals/hreindyr',
  },
  {
    name: 'Hundar',
    description: 'Hundar eru húsdýr, þekktir fyrir trygglyndi og félagsskap.',
    imageUrl: 'https://ntvskoli.s3.eu-west-2.amazonaws.com/hundur1.jpg',
    link: '/animals/dog',
  },
  {
    name: 'Ernir',
    description: 'Ernir eru stórir ránfuglar með framúrskarandi sjón.',
    imageUrl: 'https://ntvskoli.s3.eu-west-2.amazonaws.com/eagle1.jpg',
    link: '/animals/eagle',
  },
  {
    name: 'Selir',
    description: 'Selir eru hálf-vatnadýr, leikin í sjó og á landi.',
    imageUrl: 'https://ntvskoli.s3.eu-west-2.amazonaws.com/selur1.jpg',
    link: '/animals/seal',
  },
  {
    name: 'Refir',
    description: 'Refurinn er vel aðlagaður köldum umhverfum og er eini villti rándýrið á Íslandi.',
    imageUrl: 'https://ntvskoli.s3.eu-west-2.amazonaws.com/refur1.jpg',
    link: '/animals/arctic-fox',
  },
];

const styles = {
  container: {
    backgroundColor: '#f0f4f8',
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
  introText: {
    color: '#00796b',
    fontSize: '24px',
    marginBottom: '40px',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    width: '300px',
    padding: '20px',
    transition: 'transform 0.2s',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  animalName: {
    fontSize: '24px',
    color: '#004d40',
    marginTop: '10px',
    marginBottom: '10px',
  },
  animalDescription: {
    fontSize: '16px',
    color: '#616161',
    marginBottom: '20px',
  },
  link: {
    color: '#00796b',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '10px 15px',
    border: '2px solid #00796b',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  linkHover: {
    backgroundColor: '#00796b',
    color: '#ffffff',
  },
  matchContainer: {
    marginTop: '50px',
  },
  matchTitle: {
    color: '#d32f2f',
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  matchDescription: {
    fontSize: '18px',
    color: '#757575',
    marginBottom: '20px',
  },
  matchLink: {
    color: '#ffffff',
    backgroundColor: '#d32f2f',
    padding: '12px 20px',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
};

export default HomeScreen;
