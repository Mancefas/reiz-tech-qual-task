import React from 'react';

import { CountryTab } from './CountryTab';
import { useAPICall } from '../../api/apiCall';
import { useApiDataContext } from '../../context/ApiDataContext';

import './countries.scss';

export const CountriesContainer = () => {
  const { apiData, error } = useApiDataContext();
  useAPICall();

  const firstTenCounntries = apiData.slice(0, 10);

  return (
    <section className="countries__container">
      {error && <h2>Error {error}</h2>}
      {!error &&
        firstTenCounntries.map((country) => <CountryTab data={country} />)}
    </section>
  );
};
