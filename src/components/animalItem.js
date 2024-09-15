import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const AnimalItemWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  background-color: #fafafa; 
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 100%;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

const AnimalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
`;

const AnimalName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
  text-align: center;
`;

const AnimalDescription = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
`;

function AnimalItem({ animal }) {
  return (
    <AnimalItemWrapper>
      <StyledLink to={`/animals/${animal.id}`}>
        <ImageWrapper>
          <AnimalImage
            src={animal.imageUrl || 'https://via.placeholder.com/200'}
            alt={animal.description || 'Animal image'}
          />
        </ImageWrapper>
        <AnimalName>{animal.name}</AnimalName>
        <AnimalDescription>{animal.description}</AnimalDescription>
      </StyledLink>
    </AnimalItemWrapper>
  );
}

export default AnimalItem;
