import React, { useState } from 'react';

import { useApiDataContext } from '../../../context/ApiDataContext';

export const FilterByAreaButton = () => {
  const { apiData, dataToShow, setDataToShow, setIsFiltered } = useApiDataContext();

  const handleFilterByArea = () => {
    const areaOfLithuania = apiData.find((item) => item.name === "Lithuania")?.area!;
    const filteredData = [...dataToShow].filter((item) => item.area < areaOfLithuania);
    setDataToShow(filteredData);
    setIsFiltered(true);
  }

  return <button onClick={handleFilterByArea}>Filter by area smaller than LT</button>;
};
