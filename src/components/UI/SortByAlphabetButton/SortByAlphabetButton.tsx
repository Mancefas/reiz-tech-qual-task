import React, { useState } from 'react';

import { useApiDataContext } from '../../../context/ApiDataContext';

export const SortByAlphabetButton = () => {
  const { dataToShow, setDataToShow } = useApiDataContext();
  const [sortedFromA, setSortedFromA] = useState<boolean>(true);

  const handleSort = (isSorting: string) => {
    const sortedData = [...dataToShow].sort((a, b) => {
      const firstArg = isSorting === 'ZtoA' ? b : a;
      const secondArg = isSorting === 'ZtoA' ? a : b;
      return firstArg.name.localeCompare(secondArg.name, undefined, {
        sensitivity: 'base',
      });
    });

    setSortedFromA(!sortedFromA);
    setDataToShow(sortedData);
  };

  return (
    <button
      className="button"
      onClick={() => handleSort(`${sortedFromA ? 'ZtoA' : 'AtoZ'}`)}
    >
      Sort {sortedFromA ? 'Z to A' : 'A to Z'}
    </button>
  );
};
