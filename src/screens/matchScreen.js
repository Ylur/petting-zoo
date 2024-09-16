import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti'; // Confetti pakkinn


const animals = [
  {
    name: 'Arctic Fox',
    description: 'Refurinn er vel aðlagaður köldum umhverfum og er eini villti rándýrið á Íslandi. Þeir eru þekktir fyrir að vera mjög útsjónarsamir og hraustir',
    imageUrl: [
      'https://ntvskoli.s3.eu-west-2.amazonaws.com/refur1.jpg',
      'https://ntvskoli.s3.eu-west-2.amazonaws.com/refur2.jpg'
    ]
  },
  {
    name: 'Hundar',
    description: '  Hundar eru húsdýr, þekktir fyrir trygglyndi og félagsskap.',
    imageUrl: [
      'https://ntvskoli.s3.eu-west-2.amazonaws.com/hundur1.jpg',
      'https://ntvskoli.s3.eu-west-2.amazonaws.com/hundur2.jpg'
    ]
  },
  {
    name: 'Ernir',
    description: 'Ernir eru stórir ránfuglar með framúrskarandi sjón. Þeir lifa að mestu á fiski og öðrum dýrum sem þeir geta náð.',
    imageUrl: ['https://ntvskoli.s3.eu-west-2.amazonaws.com/eagle1.jpg']
  },
  {
    name: 'Hestar',
    description: 'Hestar eru stór dýr sem eru notuð til reiðar og flutninga. Þeir eru einnig mikilvægir félagar manna í mörgum menningarheimum',
    imageUrl: ['https://ntvskoli.s3.eu-west-2.amazonaws.com/hestur1.jpg']
  },
  {
    name: 'Hreindýr',
    description: 'Hreindýr eru stór dýr með horn, þekkt fyrir þátttöku í jólasögum',
    imageUrl: ['https://ntvskoli.s3.eu-west-2.amazonaws.com/hreindyr1.jpg']
  },
  {
    name: 'Selir',
    description: ' Selir eru hálf-vatnadýr sem njóta þess að leika sér bæði á landi og í sjó. Þeir eru mjög forvitnir og leiknir í sundi',
    imageUrl: ['https://ntvskoli.s3.eu-west-2.amazonaws.com/selur1.jpg']
  }
];

function MatchScreen() {
  const [index, setIndex] = useState(0);
  const [matches, setMatches] = useState([]);
  const [toggleImage, setToggleImage] = useState(0);
  const [passPosition, setPassPosition] = useState({ top: 0, left: 0 });
  const [showConfetti, setShowConfetti] = useState(false);

  
  const resetPassButtonPosition = () => {
    setPassPosition({ top: 0, left: 0 });
  };

  const handleMatch = () => {
    setMatches([...matches, animals[index].name]);
    nextAnimal();
    resetPassButtonPosition();
  };

  const handlePass = () => {
    nextAnimal();
    resetPassButtonPosition();
  };

  const nextAnimal = () => {
    if (index < animals.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
      setToggleImage((prevToggle) => (prevToggle + 1) % 2);
    } else {
      setIndex(animals.length);
      setShowConfetti(true); 
    }
  };

  const movePassButton = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const buttonWidth = 100;
    const buttonHeight = 50;

    // uppfærsla á takkanum
    let newLeft = Math.random() > 0.5 ? '250px' : '-250px';
    let newTop = Math.random() > 0.5 ? '300px' : '-300px';

    let newLeftValue = parseInt(newLeft, 10);
    let newTopValue = parseInt(newTop, 10);

    
    if (newLeftValue + buttonWidth > viewportWidth) {
      newLeftValue = viewportWidth - buttonWidth;
    } else if (newLeftValue < 0) {
      newLeftValue = 0;
    }

    if (newTopValue + buttonHeight > viewportHeight) {
      newTopValue = viewportHeight - buttonHeight;
    } else if (newTopValue < 0) {
      newTopValue = 0;
    }

  
    setPassPosition({
      top: `${newTopValue}px`,
      left: `${newLeftValue}px`
    });
  };

  // tíminn á confetti
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000); // endist í 5sek
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        minHeight: '100vh',
        padding: '50px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      {index < animals.length ? (
        <>
          <div style={cardStyle}>
            <h1 style={headingStyle}>{animals[index].name}</h1>
            <img
              src={animals[index].imageUrl[toggleImage % animals[index].imageUrl.length]}
              alt={animals[index].name}
              style={imageStyle}
            />
            <p style={descriptionStyle}>{animals[index].description}</p>
            <div
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <button onClick={handleMatch} style={buttonStyle}>
                Klappa
              </button>
              <button
                onClick={handlePass}
                onMouseEnter={movePassButton}
                style={{
                  ...buttonStyle,
                  position: 'absolute',
                  left: passPosition.left,
                  top: passPosition.top,
                  transition: 'all 0.2s ease'
                }}
              >
                Nei takk
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 style={highlightStyle}>Engin fleiri dýr!</h1>
          <h2 style={subheadingStyle}>Þú klappaðir:</h2>
          <ul style={listStyle}>
            {matches.map((match, idx) => (
              <li key={idx} style={listItemStyle}>
                <span role="img" aria-label="handshake">🤝</span> {match}
              </li>
            ))}
          </ul>
        </>
      )}

      <div>
        <Link to="/" style={{ 
          color: '#00796b', 
          textDecoration: 'underline', 
          fontSize: '18px' 
          }}>
          Aftur á yfirlit
        </Link>
      </div>
    </div>
  );
}

// cssssssss
const cardStyle = {
  background: '#fff',
  borderRadius: '15px',
  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  width: '400px',
  margin: '0 auto',
  transition: 'transform 0.3s ease',
  animation: 'fadeIn 0.5s ease'
};

const headingStyle = {
  fontSize: '36px',
  color: '#00796b',
  marginBottom: '20px'
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
  marginBottom: '20px',
  transition: 'transform 0.3s ease',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
};

const descriptionStyle = {
  fontSize: '18px',
  color: '#555',
  marginBottom: '30px'
};

const buttonStyle = {
  padding: '12px 25px',
  fontSize: '18px',
  margin: '10px',
  cursor: 'pointer',
  backgroundColor: '#00796b',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
  transition: 'background-color 0.3s ease',
  outline: 'none'
};

const highlightStyle = {
  fontSize: '48px',
  color: '#d32f2f',
  marginBottom: '20px',
  animation: 'fadeIn 1s ease'
};

const subheadingStyle = {
  fontSize: '32px',
  color: '#1976d2',
  marginBottom: '20px',
  animation: 'fadeIn 1.5s ease'
};

const listStyle = {
  listStyleType: 'none',
  padding: 0
};

const listItemStyle = {
  fontSize: '24px',
  color: '#555',
  margin: '10px 0',
  animation: 'fadeIn 2s ease'
};

export default MatchScreen;
