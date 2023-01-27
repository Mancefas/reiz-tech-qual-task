import React, { useEffect, useState } from 'react';

import { useApiDataContext } from '../../context/ApiDataContext';

import './pagination.scss';

interface PropTypes {
  setResultsFrom: (data: number) => void;
  setResultsTo: (data: number) => void;
  resultsPerPage: number;
}

export const Pagination = ({
  setResultsFrom,
  setResultsTo,
  resultsPerPage,
}: PropTypes) => {
  const { dataToShow } = useApiDataContext();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const maxPages = Math.ceil(dataToShow.length / resultsPerPage);

  const resultsTo = currentPage * resultsPerPage;
  const resultsFrom = resultsTo - resultsPerPage;

  setResultsFrom(resultsFrom);
  setResultsTo(resultsTo);

  useEffect(() => {
    setCurrentPage(1);
  }, [dataToShow]);

  return (
    <div className="pagination__container">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination__button"
      >
        Prev
      </button>
      <p>
        {currentPage}/{maxPages}
      </p>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === maxPages}
        className="pagination__button"
      >
        Next
      </button>
    </div>
  );
};
