import React, { useEffect, useState } from 'react';

import { useApiDataContext } from '../../context/ApiDataContext';

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
    <div className="countries-table__pagination-container">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="countries-table__pagination-button"
      >
        Prev
      </button>
      <p>
        {currentPage}/{maxPages}
      </p>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === maxPages}
        className="countries-table__pagination-button"
      >
        Next
      </button>
    </div>
  );
};
