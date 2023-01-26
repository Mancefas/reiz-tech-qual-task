import React, { useState } from 'react';

import { useApiDataContext } from '../../../context/ApiDataContext';

export const FilterByOceanaButton = () => {
  const { apiData, dataToShow, setDataToShow } = useApiDataContext();
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  const handleFilterByOceana = () => {
    if (!isFiltered) {
      const filteredData = [...dataToShow].filter(
        (item) => item.region === 'Oceania'
      );
      setDataToShow(filteredData);
      setIsFiltered(!isFiltered);
    } else {
      const initialData = [...apiData];
      setDataToShow(initialData);
      setIsFiltered(!isFiltered);
    }
  };
  return (
    <button onClick={handleFilterByOceana}>
      {isFiltered ? 'No filtering' : 'Filter by Oceana'}
    </button>
  );
};
