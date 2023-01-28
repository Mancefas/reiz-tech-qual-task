import React, { useState } from 'react';

import { CountryTab } from './CountryTab';
import { useAPICall } from '../../api/apiCall';
import { useApiDataContext } from '../../context/ApiDataContext';
import LoadingSpinner from '../LoadingSpinner';
import Pagination from '../Pagination';

import './countries-table.scss';

export const CountriesTable = () => {
  const { dataToShow, error, isLoading } = useApiDataContext();
  useAPICall();

  const [resultsFrom, setResultsFrom] = useState<number>();
  const [resultsTo, setResultsTo] = useState<number>();
  //maybe add a button to change how many result to show later need setResultPage for that?
  const [resultsPerPage] = useState<number>(10);

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
      <Pagination
        setResultsFrom={setResultsFrom}
        setResultsTo={setResultsTo}
        resultsPerPage={resultsPerPage}
      />
    </>
  );
};
