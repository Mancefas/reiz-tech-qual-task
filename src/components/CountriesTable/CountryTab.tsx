import Flag from 'react-world-flags';

import './country-tab.scss';

interface PropType {
  data: {
    name: string;
    region: string;
    area: number;
    independent: boolean;
    alpha3Code: string;
  };
}

export const CountryTab = ({ data }: PropType) => {
  const { name, region, area, alpha3Code } = data;

  return (
    <div className="country-tab__container">
      <div className="country-tab__name-container">
        <h2>{name}</h2>
        <Flag className="country-tab__flag" code={alpha3Code} />
      </div>
      <h3>Region : {region}</h3>
      <h3>
        Area : {area} km<sup>2</sup>
      </h3>
    </div>
  );
};
