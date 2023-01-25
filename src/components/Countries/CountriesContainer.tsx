import React, { useEffect } from 'react';

import { CountryTab } from './CountryTab';
import { useAPICall } from '../../api/apiCall';
import { useApiDataContext } from '../../context/ApiDataContext';

import './countries.scss';

export const CountriesContainer = () => {
  const { dataToShow, error } = useApiDataContext();
  useAPICall();

  const firstTenCounntries = dataToShow.slice(0, 10);

  return (
    <section className="countries__container">
      {error && <h2>Error {error}</h2>}
      {!error &&
        firstTenCounntries.map((country) => (
          <CountryTab key={country.name} data={country} />
        ))}
    </section>
  );
};
