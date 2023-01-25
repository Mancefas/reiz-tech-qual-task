import React from 'react';

import { FilterByAreaButton } from '../UI/FilterByAreaButton/FilterByAreaButton';
import { FilterByOceanaButton } from '../UI/FilterByOceanaButton/FilterByOceanaButton';
import { SortByAlphabetButton } from '../UI/SortByAlphabetButton/SortByAlphabetButton';

import './buttons-section.scss';

export const ButtonsSection = () => {
  return (
    <section className="buttons-section__container">
      <div className="buttons-section__filter-container">
        <FilterByAreaButton />
        <FilterByOceanaButton />
      </div>
      <div>
        <SortByAlphabetButton />
      </div>
    </section>
  );
};
