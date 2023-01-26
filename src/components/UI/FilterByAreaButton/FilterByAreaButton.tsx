import React, { useState } from 'react';

import { useApiDataContext } from '../../../context/ApiDataContext';

export const FilterByAreaButton = () => {
  const { apiData, dataToShow, setDataToShow } = useApiDataContext();
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  const handleFilterByArea = () => {
    const areaOfLithuania = dataToShow.find((item) => item.name === "Lithuania")?.area!;
    const filteredData = [...dataToShow].filter((item) => item.area < areaOfLithuania);
    setDataToShow(filteredData);
    setIsFiltered(!isFiltered)

    if (isFiltered) {
      setDataToShow(apiData);
      setIsFiltered(!isFiltered)
    }
  }

  return <button onClick={handleFilterByArea}>{isFiltered ? 'No filtering' : 'Filter by area bigger than LT'}</button>;
};
