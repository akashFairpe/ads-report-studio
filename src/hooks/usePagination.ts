import { useState, useMemo } from 'react';

export const usePagination = <T>(data: T[], itemsPerPage: number = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const paginatedData = useMemo(() => {
    if (showAll) return data;
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [data, currentPage, itemsPerPage, showAll]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  const goToNextPage = () => {
    if (hasNextPage) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (hasPrevPage) setCurrentPage(currentPage - 1);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setCurrentPage(1);
  };

  const resetPagination = () => {
    setCurrentPage(1);
    setShowAll(false);
  };

  // Return original data for export (only first page)
  const exportData = useMemo(() => {
    return data.slice(0, itemsPerPage);
  }, [data, itemsPerPage]);

  return {
    currentPage,
    paginatedData,
    exportData,
    totalPages,
    hasNextPage,
    hasPrevPage,
    showAll,
    goToNextPage,
    goToPrevPage,
    toggleShowAll,
    resetPagination,
    setCurrentPage
  };
};