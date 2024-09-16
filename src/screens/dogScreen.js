import React from 'react';
import { Link } from 'react-router-dom';

// routes á síðurnar
const animalPaths = [
  { name: "Hreindýr", path: "/animals/hreindyr" },
  { name: "Hundar", path: "/animals/dog" },
  { name: "Ernir", path: "/animals/eagle" },
  { name: "Refir", path: "/animals/arctic-fox" },
  { name: "Hestar", path: "/animals/horse" },
  { name: "Selir", path: "/animals/seal" },
];

function DogScreen() {
  const currentIndex = animalPaths.findIndex((animal) => animal.path === "/animals/dog");
  const prevAnimal = animalPaths[(currentIndex - 1 + animalPaths.length) % animalPaths.length];
  const nextAnimal = animalPaths[(currentIndex + 1) % animalPaths.length];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hundar</h1>
      <img src="https://ntvskoli.s3.eu-west-2.amazonaws.com/hundur1.jpg" alt="Hundur" style={styles.image} />
      <p style={styles.description}>
        Hundar eru húsdýr, þekktir fyrir trygglyndi og félagsskap.
      </p>
      <div style={styles.navigation}>
        <Link to={prevAnimal.path} style={styles.navLink}>Fyrri ({prevAnimal.name})</Link>
        <Link to="/" style={styles.navLink}>Heim</Link>
        <Link to={nextAnimal.path} style={styles.navLink}>Næsta ({nextAnimal.name})</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#fff9c4',
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

export default DogScreen;
