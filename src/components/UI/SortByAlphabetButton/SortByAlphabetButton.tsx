import React, { useState } from 'react';

import { useApiDataContext } from '../../../context/ApiDataContext';

export const SortByAlphabetButton = () => {
  const { apiData, setApiData } = useApiDataContext();
  const [sortedFromA, setSortedFromA] = useState<boolean>(true);

  const handleSort = (isSorting: string) => {
    const isSortingAtoZ = isSorting === 'AtoZ' ? true : false;

    const sortedData = [...apiData].sort((a, b) => {
      const firstArg = isSorting === 'ZtoA' ? b : a;
      const secondArg = isSorting === 'ZtoA' ? a : b;
      return firstArg.name.localeCompare(secondArg.name, undefined, {
        sensitivity: 'base',
      });
    });
    setSortedFromA(isSortingAtoZ);
    setApiData(sortedData);
  };

  return (
    <>
      {sortedFromA && (
        <button onClick={() => handleSort('ZtoA')}>Sort Z-A</button>
      )}
      {!sortedFromA && (
        <button onClick={() => handleSort('AtoZ')}>Sort A-Z</button>
      )}
    </>
  );
};
