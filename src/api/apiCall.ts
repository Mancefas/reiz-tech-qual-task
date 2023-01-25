import React, { useEffect } from 'react';

import { useApiDataContext } from '../context/ApiDataContext';
import { API_LINK } from '../constants/links';

export const useAPICall = () => {
  //Maybe useMemo or useCallback for performance...
  const { setApiData, setError } = useApiDataContext();

  const dataFromAPI = async () => {
    try {
      const response = await fetch(API_LINK);
      if (!response.ok) {
        setError('Something went wrong!!!!');
      }
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      setError(JSON.stringify(error));
    }
  };

  useEffect(() => {
    dataFromAPI();
  }, [dataFromAPI]);
};
