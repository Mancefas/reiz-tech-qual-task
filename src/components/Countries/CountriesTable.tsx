import React, { useEffect, useState } from 'react';

import { CountryTab } from './CountryTab';
import { useAPICall } from '../../api/apiCall';
import { useApiDataContext } from '../../context/ApiDataContext';

import './countries-table.scss';
import LoadingSpinner from '../LoadingSpinner';

export const CountriesTable = () => {
  const { dataToShow, error, isLoading } = useApiDataContext();
  useAPICall();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const maxPages = Math.ceil(dataToShow.length / 10);
  const resultsPerPage = 10;
  const resultsTo = currentPage * resultsPerPage;
  const resultsFrom = resultsTo - resultsPerPage;

  useEffect(() => {
    setCurrentPage(1);
  }, [dataToShow]);

  const getCountriesToShow = dataToShow.slice(resultsFrom, resultsTo);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <section className="countries-table__container">
        {error && !isLoading && <h2>Error {error}</h2>}
        {!error &&
          !isLoading &&
          getCountriesToShow.map((country) => (
            <CountryTab key={country.name} data={country} />
          ))}
      </section>
      <div className="countries-table__pagination-container">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="countries-table__pagination-button"
        >
          Prev
        </button>
        <p>
          {currentPage}/{maxPages}
        </p>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === maxPages}
          className="countries-table__pagination-button"
        >
          Next
        </button>
      </div>
    </>
  );
};
