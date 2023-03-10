import FilterByAreaButton from '../UI/FilterByAreaButton';
import FilterByOceanaButton from '../UI/FilterByOceanaButton';
import NoFilteringButton from '../UI/NoFilteringButton';
import SortByAlphabetButton from '../UI/SortByAlphabetButton';

import './buttons-section.scss';

export const ButtonsSection = () => {
  return (
    <section className="buttons-section__container">
      <div className="buttons-section__filter-container">
        <FilterByAreaButton />
        <FilterByOceanaButton />
        <NoFilteringButton />
      </div>
      <div>
        <SortByAlphabetButton />
      </div>
    </section>
  );
};
