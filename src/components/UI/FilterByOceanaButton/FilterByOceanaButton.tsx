import React from 'react';

import { useApiDataContext } from '../../../context/ApiDataContext';

export const FilterByOceanaButton = () => {
  const { dataToShow, setDataToShow, setIsFiltered } = useApiDataContext();

  const handleFilterByOceana = () => {
    const filteredData = [...dataToShow].filter(
      (item) => item.region === 'Oceania'
    );

    setDataToShow(filteredData);
    setIsFiltered(true);
  };
  return (
    <button className="button" onClick={handleFilterByOceana}>
      Filter by Oceana
    </button>
  );
};
