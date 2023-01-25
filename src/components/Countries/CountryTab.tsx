import React from 'react'

import './country-tab.scss'

interface PropType {
    country: {
        name: string;
        region: string;
        area: number;
        independent: boolean;
    }
}

export const CountryTab = ({ country }: PropType) => {
    const { name, region, area } = country;
    return (
        <div className='country-tab__container'>
            <h3> Name : {name}</h3>
            <h3>Region : {region}</h3>
            <h3> Area size : {area}</h3>
        </div>
    )
}
