import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  showAll: boolean;
  onNextPage: () => void;
  onPrevPage: () => void;
  onToggleShowAll: () => void;
  totalItems: number;
  itemsPerPage: number;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  hasNextPage,
  hasPrevPage,
  showAll,
  onNextPage,
  onPrevPage,
  onToggleShowAll,
  totalItems,
  itemsPerPage
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = showAll ? totalItems : Math.min(currentPage * itemsPerPage, totalItems);

  if (totalItems <= itemsPerPage) {
    return null; // Don't show pagination if all items fit on one page
  }

  return (
    <div className="flex items-center justify-between px-2 py-4 print:hidden">
      <div className="text-sm text-muted-foreground">
        Showing {startItem} to {endItem} of {totalItems} entries
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onToggleShowAll}
          className="text-sm"
        >
          {showAll ? 'Show Paginated' : 'View All'}
        </Button>
        {!showAll && totalPages > 1 && (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={onPrevPage}
              disabled={!hasPrevPage}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <span className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={onNextPage}
              disabled={!hasNextPage}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaginationControls;