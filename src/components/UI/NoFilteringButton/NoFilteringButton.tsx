import React from 'react'

import { useApiDataContext } from '../../../context/ApiDataContext';

export const NoFilteringButton = () => {
    const { isFiltered, setIsFiltered, apiData, setDataToShow } = useApiDataContext();
    const handleNoFiltering = () => {
        setDataToShow(apiData);
        setIsFiltered(false);
    }

    return (
        <>
            {isFiltered && <button onClick={handleNoFiltering}>No Filtering</button>}
        </>
    )
}