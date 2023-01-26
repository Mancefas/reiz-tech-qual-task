import React, { useEffect, useState } from 'react';

import { CountryTab } from './CountryTab';
import { useAPICall } from '../../api/apiCall';
import { useApiDataContext } from '../../context/ApiDataContext';

import './countries.scss';

export const CountriesContainer = () => {
  const { dataToShow, error } = useApiDataContext();
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
      <section className="countries__container">
        {error && <h2>Error {error}</h2>}
        {!error &&
          getCountriesToShow.map((country) => (
            <CountryTab key={country.name} data={country} />
          ))}
      </section>
      <div className="countries__pagination-container">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="countries__pagination-button"
        >
          Prev
        </button>
        <p>
          {currentPage}/{maxPages}
        </p>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === maxPages}
          className="countries__pagination-button"
        >
          Next
        </button>
      </div>
    </>
  );
};
