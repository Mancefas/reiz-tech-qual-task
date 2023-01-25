import React, { useEffect, useState } from 'react'

import { CountryTab } from './CountryTab'
import './countries.scss'
import { API_LINK } from '../constants/links'

interface Country {
    name: string;
    region: string;
    area: number;
    independent: boolean;
}

export const CountriesContainer = () => {
    const [dataFromApi, setDataFromApi] = useState<Country[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const dataWithID = async () => {
            try {
                const response = await fetch(API_LINK);
                if (!response.ok) {
                    setError("Something went wrong!!!!");
                }
                const data = await response.json();
                setDataFromApi(data);
            } catch (error) {
                setError(JSON.stringify(error));
            }
        };
        dataWithID();
    }, [])

    const firstTenCounntries = dataFromApi.slice(0, 10);

    return (
        <section className='countries__container'>
            {firstTenCounntries.map((country) => (
                <CountryTab country={country} />
            ))}
        </section>
    )
}
