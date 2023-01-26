import React, { useEffect, useCallback } from 'react';

import { useApiDataContext } from '../context/ApiDataContext';
import { API_LINK } from '../constants/links';

export const useAPICall = () => {
  const { setApiData, setError, setDataToShow, setIsLoading } =
    useApiDataContext();

  const dataFromAPI = useCallback(async () => {
    try {
      const response = await fetch(API_LINK);
      if (!response.ok) {
        setError('Something went wrong!!!!');
        setIsLoading(false);
      }
      const data = await response.json();
      setApiData(data);
      setDataToShow(data);
      setIsLoading(false);
    } catch (error) {
      setError(JSON.stringify(error));
      setIsLoading(false);
    }
  }, [setApiData, setError]);

  useEffect(() => {
    dataFromAPI();
  }, [dataFromAPI]);
};
