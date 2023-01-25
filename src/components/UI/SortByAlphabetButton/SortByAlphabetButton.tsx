import React, { useState } from 'react';

import { useApiDataContext } from '../../../context/ApiDataContext';

export const SortByAlphabetButton = () => {
  const { apiData, setApiData } = useApiDataContext();
  const [sortedFromA, setSortedFromA] = useState<boolean>(true);

  const handleSortZtoA = () => {
    const sortedData = [...apiData].sort((a, b) => {
      return b.name.localeCompare(a.name, undefined, { sensitivity: 'base' });
    });
    setSortedFromA(false);
    setApiData(sortedData);
  };

  const handleSortAtoZ = () => {
    const sortedData = [...apiData].sort((a, b) => {
      return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
    });
    setSortedFromA(true);
    setApiData(sortedData);
  };

  return (
    <>
      {sortedFromA && <button onClick={handleSortZtoA}>Sort Z-A</button>}
      {!sortedFromA && <button onClick={handleSortAtoZ}>Sort A-Z</button>}
    </>
  );
};
