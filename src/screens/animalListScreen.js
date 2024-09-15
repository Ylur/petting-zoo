// PrentListScreen.js
import React, { useState, useMemo, useEffect } from 'react';
import { AppColors } from '../../colors';
import BrandFilter from './BrandFilter';
import SearchBar from './SearchBar';
import PrentItem from './PrentItem';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

// Styled Components
const Container = styled.div`
  background-color: ${AppColors.background2};
  color: ${AppColors.textPrimary};
  min-height: 100vh;
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const NoResults = styled.p`
  text-align: center;
`;

const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  font-size: 14px;
  background-color: ${(props) =>
    props.isActive ? AppColors.primary : '#f0f0f0'};
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${AppColors.primary};
    color: #fff;
  }

  &:focus {
    outline: 2px solid ${AppColors.primary};
  }
`;

function animalListScreen({ allData }) {
  const { t } = useTranslation();
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // óþarfi í raun
  const filteredPrent = useMemo(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    return allData.filter((prent) => {
      const matchesBrand =
        selectedBrand === 'All' ||
        prent.brand?.toLowerCase() === selectedBrand.toLowerCase();

      const matchesSearch =
        prent.description?.toLowerCase().includes(lowerSearchTerm) ||
        prent.compatible?.toLowerCase().includes(lowerSearchTerm);

      return matchesBrand && matchesSearch;
    });
  }, [selectedBrand, searchTerm, allData]);

  //endusetja
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedBrand]);

  // Pagination 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPrent.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredPrent.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <Helmet>
        <title>{t('Animals')}</title>
        <meta
          name="Lýsing"
          content={t('Browse our list of Animals.')}
        />
      </Helmet>

      <Header>{t('Animals')}</Header>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <BrandFilter
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />

      {currentItems.length === 0 ? (
        <NoResults>{t('Því miður fannst ekkert, hefuru prufað LMGTFY ?.')}</NoResults>
      ) : (
        <>
          <Grid>
            {currentItems.map((prent) => (
              <PrentItem
                key={prent.id}
                prent={prent}
                searchTerm={searchTerm}
              />
            ))}
          </Grid>

          {totalPages > 1 && (
            <PaginationControls>
              {[...Array(totalPages)].map((_, index) => (
                <PageButton
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  isActive={currentPage === index + 1}
                >
                  {index + 1}
                </PageButton>
              ))}
            </PaginationControls>
          )}
        </>
      )}
    </Container>
  );
}

export default animalListScreen;
