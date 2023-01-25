import React from 'react';

import './country-tab.scss';

interface PropType {
  data: {
    name: string;
    region: string;
    area: number;
    independent: boolean;
  };
}

export const CountryTab = ({ data }: PropType) => {
  const { name, region, area } = data;
  return (
    <div className="country-tab__container">
      <h3>Name : {name}</h3>
      <h3>Region : {region}</h3>
      <h3>
        Area : {area} km<sup>2</sup>
      </h3>
    </div>
  );
};
